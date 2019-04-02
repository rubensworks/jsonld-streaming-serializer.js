import EventEmitter = NodeJS.EventEmitter;
import * as RDF from "rdf-js";
import {PassThrough, Transform, TransformCallback} from "stream";
import {SeparatorType} from "./SeparatorType";
import {ITermToValueOptions, Util} from "./Util";

/**
 * A stream transformer that transforms an {@link RDF.Stream} into a JSON-LD (text) stream.
 */
export class JsonLdSerializer extends Transform {

  private readonly options: IJsonLdSerializerOptions;

  private indentation: number;
  private opened: boolean;
  private lastSubject: RDF.Term;
  private lastPredicate: RDF.Term;
  private hadObjectForPredicate: boolean;
  private objectOptions: ITermToValueOptions;
  private lastGraph: RDF.Term;

  constructor(options: IJsonLdSerializerOptions = {}) {
    super({ objectMode: true });

    this.indentation = 0;
    this.options = options;
  }

  /**
   * Parses the given text stream into a quad stream.
   * @param {NodeJS.EventEmitter} stream A text stream.
   * @return {NodeJS.EventEmitter} A quad stream.
   */
  public import(stream: EventEmitter): EventEmitter {
    const output = new PassThrough({ objectMode: true });
    stream.on('error', (error) => parsed.emit('error', error));
    stream.on('data', (data) => output.write(data));
    stream.on('end', () => output.emit('end'));
    const parsed = output.pipe(new JsonLdSerializer(this.options));
    return parsed;
  }

  /**
   * Transforms a quad into the text stream.
   * @param {Quad} quad An RDF quad.
   * @param {string} encoding An (ignored) encoding.
   * @param {module:stream.internal.TransformCallback} callback Callback that is invoked when the transformation is done
   * @private
   */
  public _transform(quad: RDF.Quad, encoding: string, callback: TransformCallback): void {
    // Open the array before the first quad
    if (!this.opened) {
      this.opened = true;
      this.pushSeparator(SeparatorType.ARRAY_START);
      this.indentation++;
    }

    // Check if the subject equals the last named graph
    // In that case, we can reuse the already-existing @id node
    const lastGraphMatchesSubject = this.lastGraph && this.lastGraph.termType !== 'DefaultGraph'
      && this.lastGraph.equals(quad.subject);

    // Write graph
    if (!lastGraphMatchesSubject && (!this.lastGraph || !quad.graph.equals(this.lastGraph))) {
      // Check if the named graph equals the last subject
      // In that case, we can reuse the already-existing @id node
      let lastSubjectMatchesGraph = quad.graph.termType !== 'DefaultGraph'
        && this.lastSubject && this.lastSubject.equals(quad.graph);

      if (this.lastGraph) {
        if (this.lastGraph.termType !== 'DefaultGraph') {
          // The last graph was named
          this.endPredicate();
          this.endSubject();
          this.endGraph(true);

          lastSubjectMatchesGraph = false; // Special-case to avoid deeper nesting
        } else {
          // The last graph was default
          if (!lastSubjectMatchesGraph) {
            this.endPredicate();
            this.endSubject(true);
          } else {
            this.endPredicate(true);
            this.lastSubject = null;
          }
        }
      }

      // Push the graph
      if (quad.graph.termType !== 'DefaultGraph') {
        if (!lastSubjectMatchesGraph) {
          this.pushId(quad.graph);
        }
        this.pushSeparator(SeparatorType.GRAPH_FIELD);
        this.indentation++;
      }

      this.lastGraph = quad.graph;
    }

    // Write subject
    if (!this.lastSubject || !quad.subject.equals(this.lastSubject)) {
      if (lastGraphMatchesSubject) {
        this.endPredicate();
        this.endSubject();
        this.indentation--;
        this.pushSeparator(SeparatorType.ARRAY_END_COMMA);
        this.lastGraph = quad.graph;
      } else {
        if (this.lastSubject) {
          this.endPredicate();
          this.endSubject(true);
        }

        // Open a new node for the new subject
        this.pushId(quad.subject);
      }
      this.lastSubject = quad.subject;
    }

    // Write predicate
    if (!this.lastPredicate || !quad.predicate.equals(this.lastPredicate)) {
      if (this.lastPredicate) {
        this.endPredicate(true);
      }

      // Open a new array for the new predicate
      this.pushPredicate(quad.predicate);
    }

    // Write the object value
    this.pushObject(quad.object);

    return callback();
  }

  /**
   * Claled when the incoming stream is closed.
   * @param {module:stream.internal.TransformCallback} callback Callback that is invoked when the flushing is done.
   * @private
   */
  public _flush(callback: TransformCallback): void {
    // If the stream was empty, ensure that we push the opening array
    if (!this.opened) {
      this.pushSeparator(SeparatorType.ARRAY_START);
      this.indentation++;
    }

    if (this.lastPredicate) {
      this.endPredicate();
    }
    if (this.lastSubject) {
      this.endSubject();
    }
    if (this.lastGraph && this.lastGraph.termType !== 'DefaultGraph') {
      this.endGraph();
    }

    this.indentation--;
    this.pushSeparator(SeparatorType.ARRAY_END);
    return callback(null, null);
  }

  /**
   * Push the given term as an @id field.
   * @param {Term} term An RDF term.
   */
  protected pushId(term: RDF.Term) {
    const subjectValue = term.termType === 'BlankNode' ? '_:' + term.value : term.value;
    this.pushSeparator(SeparatorType.OBJECT_START);
    this.indentation++;
    this.pushIndented(`"@id": "${subjectValue}",`);
  }

  /**
   * Push the given predicate field.
   * @param {Term} predicate An RDF term.
   */
  protected pushPredicate(predicate: RDF.Term) {
    let property = predicate.value;

    // Convert rdf:type into @type if not disabled.
    if (!this.options.useRdfType && property === Util.RDF_TYPE) {
      property = '@type';
      this.objectOptions = { ...this.options, compactIds: true };
    }

    // Open array for following objects
    this.pushIndented(`"${property}": [`);
    this.indentation++;

    this.lastPredicate = predicate;
  }

  /**
   * Push the given object value.
   * @param {Term} object An RDF term.
   */
  protected pushObject(object: RDF.Term) {
    // Add a comma if we already had an object for this predicate
    if (!this.hadObjectForPredicate) {
      this.hadObjectForPredicate = true;
    } else {
      this.pushSeparator(SeparatorType.COMMA);
    }

    // Convert the object into a value and push it
    let value;
    try {
      value = Util.termToValue(object, this.objectOptions || this.options);
    } catch (e) {
      return this.emit('error', e);
    }
    this.pushIndented(`${JSON.stringify(value, null, this.options.space)}`);
  }

  /**
   * Push the end of a predicate and reset the buffers.
   * @param {boolean} comma If a comma should be appended.
   */
  protected endPredicate(comma?: boolean) {
    // Close the predicate array
    this.indentation--;
    this.pushSeparator(comma ? SeparatorType.ARRAY_END_COMMA : SeparatorType.ARRAY_END);

    // Reset object buffer
    this.hadObjectForPredicate = false;
    this.objectOptions = null;

    // Reset predicate buffer
    this.lastPredicate = null;
  }

  /**
   * Push the end of a subject and reset the buffers.
   * @param {boolean} comma If a comma should be appended.
   */
  protected endSubject(comma?: boolean) {
    // Close the last subject's node;
    this.indentation--;
    this.pushSeparator(comma ? SeparatorType.OBJECT_END_COMMA : SeparatorType.OBJECT_END);

    // Reset subject buffer
    this.lastSubject = null;
  }

  /**
   * Push the end of a graph and reset the buffers.
   * @param {boolean} comma If a comma should be appended.
   */
  protected endGraph(comma?: boolean) {
    // Close the graph array
    this.indentation--;
    this.pushSeparator(SeparatorType.ARRAY_END);
    // Close the graph id node
    this.indentation--;
    this.pushSeparator(comma ? SeparatorType.OBJECT_END_COMMA : SeparatorType.OBJECT_END);

    // Reset graph buffer
    this.lastGraph = null;
  }

  /**
   * Puh the given separator.
   * @param {SeparatorType} type A type of separator.
   */
  protected pushSeparator(type: SeparatorType) {
    this.pushIndented( type.label);
  }

  /**
   * An indentation-aware variant of {@link #push}.
   * All strings that are pushed here will be prefixed by {@link #indentation} amount of spaces.
   * @param {string} data A string.
   */
  protected pushIndented(data: string) {
    const prefix = this.getIndentPrefix();
    const lines = data.split('\n').map((line) => prefix + line).join('\n');
    this.push(lines);
    if (this.options.space) {
      this.push('\n');
    }
  }

  /**
   * @return {string} Get the current indentation prefix based on {@link #indentation}.
   */
  protected getIndentPrefix(): string {
    return this.options.space ? this.options.space.repeat(this.indentation) : '';
  }

}

/**
 * Constructor arguments for {@link JsonLdSerializer}
 */
export interface IJsonLdSerializerOptions {
  /**
   * The indentation string that should be used when stringifying JSON.
   * Defaults to undefined.
   */
  space?: string;
  /**
   * If '@id' objects without other entries should be compacted.
   * Defaults to false.
   */
  compactIds?: boolean;
  /**
   * If rdf:type predicates should be emitted directly, instead of @type.
   * Defaults to false.
   */
  useRdfType?: boolean;
  /**
   * If literals should be converted to primitive types, such as booleans and integers.
   * Defaults to false;
   */
  useNativeTypes?: boolean;
}
