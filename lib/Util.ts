import {JsonLdContextNormalized} from "jsonld-context-parser";
import * as RDF from "rdf-js";

/**
 * Utility functions and methods.
 */
export class Util {

  public static readonly XSD: string = 'http://www.w3.org/2001/XMLSchema#';
  public static readonly XSD_STRING: string = Util.XSD + 'string';
  public static readonly RDF: string = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  public static readonly RDF_TYPE: string = Util.RDF + 'type';
  public static readonly RDF_JSON: string = Util.RDF + 'JSON';

  /**
   * Convert an RDF term to a JSON value.
   * @param {Term} term An RDF term.
   * @param {JsonLdContextNormalized} context The context.
   * @param {ITermToValueOptions} options Conversion options.
   * @return {any} A JSON value.
   */
  public static termToValue(term: RDF.Term, context: JsonLdContextNormalized, options: ITermToValueOptions = {
    compactIds: false,
    useNativeTypes: false,
  }): any {
    switch (term.termType) {
    case 'NamedNode':
      const compacted = context.compactIri(term.value, options.vocab);
      return options.compactIds ? compacted : { '@id': compacted };
    case 'DefaultGraph':
      return options.compactIds ? term.value : { '@id': term.value };
    case 'BlankNode':
      const id = `_:${term.value}`;
      return options.compactIds ? id : { '@id': id };
    case 'Literal':
      if (term.datatype.value === Util.RDF_JSON) {
        return {
          '@value': JSON.parse(term.value),
          '@type': '@json',
        };
      }
      const stringType = term.datatype.value === Util.XSD_STRING;
      const rawValue = {
        '@value': !stringType && options.useNativeTypes
          ? Util.stringToNativeType(term.value, term.datatype.value) : term.value,
      };
      if (term.language) {
        return { ...rawValue, '@language': term.language };
      } else if (!stringType && typeof rawValue['@value'] === 'string') {
        return { ...rawValue, '@type': term.datatype.value };
      } else {
        return rawValue;
      }
    }
  }

  /**
   * Convert a string term to a native type.
   * If no conversion is possible, the original string will be returned.
   * @param {string} value An RDF term's string value.
   * @param {string} type
   * @return {any}
   */
  public static stringToNativeType(value: string, type: string): any {
    if (type.startsWith(Util.XSD)) {
      const xsdType = type.substr(Util.XSD.length);
      switch (xsdType) {
      case 'boolean':
        if (value === 'true') {
          return true;
        } else if (value === 'false') {
          return false;
        }
        throw new Error(`Invalid xsd:boolean value '${value}'`);
      case 'integer':
      case 'number':
      case 'int':
      case 'byte':
      case 'long':
        const parsedInt = parseInt(value, 10);
        if (isNaN(parsedInt)) {
          throw new Error(`Invalid xsd:integer value '${value}'`);
        }
        return parsedInt;
      case 'float':
      case 'double':
        const parsedFloat = parseFloat(value);
        if (isNaN(parsedFloat)) {
          throw new Error(`Invalid xsd:float value '${value}'`);
        }
        return parsedFloat;
      }
    }
    return value;
  }

}

export interface ITermToValueOptions {
  /**
   * If '@id' objects without other entries should be compacted.
   */
  compactIds?: boolean;
  /**
   * If literals should be converted to primitive types, such as booleans and integers.
   * Defaults to false.
   */
  useNativeTypes?: boolean;
  /**
   * If vocab-mode should be used for term compacting.
   * Defaults to false.
   */
  vocab?: boolean;
}
