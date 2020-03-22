import {blankNode, defaultGraph, literal, namedNode} from "@rdfjs/data-model";
import {Util} from "../../lib/Util";
import {JsonLdContextNormalized} from "jsonld-context-parser";

describe('Util', () => {

  describe('stringToNativeType', () => {
    it('should handle unknown types', async () => {
      return expect(Util.stringToNativeType('abc', 'http://ex.org/type'))
        .toEqual('abc');
    });

    it('should handle unknown XSD types', async () => {
      return expect(Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#unknown'))
        .toEqual('abc');
    });

    it('should handle true xsd:boolean', async () => {
      return expect(Util.stringToNativeType('true', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toEqual(true);
    });

    it('should handle false xsd:boolean', async () => {
      return expect(Util.stringToNativeType('false', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toEqual(false);
    });

    it('should error on invalid xsd:boolean', async () => {
      return expect(() => Util.stringToNativeType('invalid', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toThrow(new Error('Invalid xsd:boolean value \'invalid\''));
    });

    it('should handle xsd:integer', async () => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#integer')).toEqual(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#integer')).toEqual(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#integer')).toEqual(999);
    });

    it('should error on invalid xsd:integer', async () => {
      return expect(() => Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#integer'))
        .toThrow(new Error('Invalid xsd:integer value \'abc\''));
    });

    it('should handle xsd:number', async () => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#number')).toEqual(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#number')).toEqual(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#number')).toEqual(999);
    });

    it('should handle xsd:int', async () => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#int')).toEqual(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#int')).toEqual(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#int')).toEqual(999);
    });

    it('should handle xsd:byte', async () => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#byte')).toEqual(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#byte')).toEqual(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#byte')).toEqual(999);
    });

    it('should handle xsd:long', async () => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#long')).toEqual(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#long')).toEqual(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#long')).toEqual(999);
    });

    it('should handle xsd:float', async () => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#float')).toEqual(0.0);
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#float')).toEqual(10.10);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#float')).toEqual(123.45);
    });

    it('should error on invalid xsd:float', async () => {
      return expect(() => Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#float'))
        .toThrow(new Error('Invalid xsd:float value \'abc\''));
    });

    it('should handle xsd:decimal', async () => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual('0.0');
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual('10.10');
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual('1.2345E2');
    });

    it('should handle xsd:float', async () => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(0.0);
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(10.10);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(123.45);
    });
  });

  describe('termToValue', () => {
    it('should handle named nodes', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/'), new JsonLdContextNormalized({})))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with compactIds true', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { compactIds: true }))
        .toEqual('http://ex.org/');
    });

    it('should handle named nodes without context vocab in vocab mode', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { vocab: true }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes without context vocab in base mode', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context vocab in vocab mode', async () => {
      const context = new JsonLdContextNormalized({ '@vocab': 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': '' });
    });

    it('should handle named nodes with context vocab in base mode', async () => {
      const context = new JsonLdContextNormalized({ '@vocab': 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context base in vocab mode', async () => {
      const context = new JsonLdContextNormalized({ '@base': 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context base in base mode', async () => {
      const context = new JsonLdContextNormalized({ '@base': 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': '' });
    });

    it('should handle named nodes with context term in vocab mode', async () => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': 'ex' });
    });

    it('should handle named nodes with context term in base mode', async () => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context prefix in vocab mode', async () => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/aa'), context, { vocab: true }))
        .toEqual({ '@id': 'ex:aa' });
    });

    it('should handle named nodes with context prefix in base mode', async () => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      return expect(Util.termToValue(namedNode('http://ex.org/aa'), context, { vocab: false }))
        .toEqual({ '@id': 'ex:aa' });
    });

    it('should handle default graphs', async () => {
      return expect(Util.termToValue(defaultGraph(), new JsonLdContextNormalized({})))
        .toEqual({ '@id': '' });
    });

    it('should handle default graphs with compactIds true', async () => {
      return expect(Util.termToValue(defaultGraph(), new JsonLdContextNormalized({}), { compactIds: true }))
        .toEqual('');
    });

    it('should handle blank nodes', async () => {
      return expect(Util.termToValue(blankNode('b0'), new JsonLdContextNormalized({})))
        .toEqual({ '@id': '_:b0' });
    });

    it('should handle blank nodes with compactIds true', async () => {
      return expect(Util.termToValue(blankNode('b0'), new JsonLdContextNormalized({}), { compactIds: true }))
        .toEqual('_:b0');
    });

    it('should handle literals without language and datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc'), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle literals without language and datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc'), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle literals with language with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc', 'en'), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle literals with language with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc', 'en'), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle string literals with unknown datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc', namedNode('http://ex.org/type')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string literals with unknown datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc', namedNode('http://ex.org/type')), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string literals with number datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('10', namedNode('http://www.w3.org/2001/XMLSchema#number')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': '10', '@type': 'http://www.w3.org/2001/XMLSchema#number' });
    });

    it('should handle string literals with number datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('10', namedNode('http://www.w3.org/2001/XMLSchema#number')), new JsonLdContextNormalized({}),
        { useNativeTypes: true })).toEqual({ '@value': 10 });
    });

    it('should handle string literals with decimal datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('10', namedNode('http://www.w3.org/2001/XMLSchema#decimal')), new JsonLdContextNormalized({}),
        { useNativeTypes: true })).toEqual(
          { '@value': '10', '@type': 'http://www.w3.org/2001/XMLSchema#decimal' });
    });

    it('should handle string literals with JSON datatype', async () => {
      return expect(Util.termToValue(literal('true', namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': true, '@type': '@json' });
      return expect(Util.termToValue(literal('{"a":"b"}', namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': { a: 'b' }, '@type': '@json' });
    });
  });

});
