import EventEmitter = NodeJS.EventEmitter;
import * as RDF from "rdf-js";
import {PassThrough, Transform, TransformCallback} from "stream";
import {ITermToValueOptions, Util} from "./Util";

/**
 * A stream transformer that transforms an {@link RDF.Stream} into a JSON-LD (text) stream.
 */
export class JsonLdSerializer extends Transform {

  private readonly options: IJsonLdSerializerOptions;
  private readonly useRdfType: boolean;

  private indentation: number;
  private opened: boolean;
  private lastSubject: RDF.Term;
  private lastPredicate: RDF.Term;
  private hadObjectForPredicate: boolean;
  private objectOptions: ITermToValueOptions;

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

  public _transform(quad: RDF.Quad, encoding: string, callback: TransformCallback): void {
    // Open the array before the first quad
    if (!this.opened) {
      this.opened = true;
      this.pushIndented(`[`);
      this.indentation++;
    }

    if (!this.lastSubject || !quad.subject.equals(this.lastSubject)) {
      if (this.lastSubject) {
        // Close the last subject's node (and predicate array)
        this.indentation--;
        this.pushIndented(`]`);
        this.indentation--;
        this.pushIndented(`},`);

        // Reset predicate buffer
        this.lastPredicate = null;
        this.hadObjectForPredicate = false;
        this.objectOptions = null;
      }

      // Open a new node for the new subject
      this.lastSubject = quad.subject;
      const subjectValue = quad.subject.termType === 'BlankNode' ? '_:' + quad.subject.value : quad.subject.value;
      this.pushIndented(`{`);
      this.indentation++;
      this.pushIndented(`"@id": "${subjectValue}",`);
    }

    if (!this.lastPredicate || !quad.predicate.equals(this.lastPredicate)) {
      if (this.lastPredicate) {
        // Close the last predicate's array
        this.indentation--;
        this.pushIndented(`],`);
      }

      // Open a new array for the new predicate
      this.lastPredicate = quad.predicate;
      this.hadObjectForPredicate = false;
      this.objectOptions = null;
      this.pushPredicate(quad.predicate);
    }

    // Write the object value
    this.pushObject(quad.object, this.objectOptions || this.options);

    return callback();
  }

  public _flush(callback: TransformCallback): void {
    // If the stream was empty, ensure that we push the opening array
    if (!this.opened) {
      this.pushIndented(`[`);
      this.indentation++;
    }

    if (this.lastPredicate) {
      // Close predicate array
      this.lastPredicate = null;
      this.hadObjectForPredicate = false;
      this.indentation--;
      this.pushIndented(`]`);
    }
    if (this.lastSubject) {
      // Close the subject node
      this.lastSubject = null;
      this.indentation--;
      this.pushIndented(`}`);
    }

    this.indentation--;
    this.pushIndented(`]`);
    return callback(null, null);
  }

  protected pushPredicate(predicate: RDF.Term) {
    let property = predicate.value;

    if (!this.options.useRdfType && property === Util.RDF_TYPE) {
      property = '@type';
      this.objectOptions = { ...this.options, compactIds: true };
    }

    this.pushIndented(`"${property}": [`);
    this.indentation++;
  }

  protected pushObject(object: RDF.Term, options: ITermToValueOptions) {
    if (!this.hadObjectForPredicate) {
      this.hadObjectForPredicate = true;
    } else {
      this.pushIndented(`,`);
    }
    let value;
    try {
      value = Util.termToValue(object, options);
    } catch (e) {
      return this.emit('error', e);
    }
    this.pushIndented(`${JSON.stringify(value, null, this.options.space)}`);
  }

  protected pushIndented(data: string) {
    const prefix = this.getIndentPrefix();
    const lines = data.split('\n').map((line) => prefix + line).join('\n');
    this.push(lines);
    if (this.options.space) {
      this.push('\n');
    }
  }

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
