import {blankNode, defaultGraph, literal, namedNode} from "@rdfjs/data-model";
import {Util} from "../../lib/Util";

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
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual(0.0);
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual(10.10);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#decimal')).toEqual(123.45);
    });

    it('should handle xsd:float', async () => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(0.0);
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(10.10);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#double')).toEqual(123.45);
    });
  });

  describe('termToValue', () => {
    it('should handle named nodes', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/')))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with compactIds true', async () => {
      return expect(Util.termToValue(namedNode('http://ex.org/'), { compactIds: true }))
        .toEqual('http://ex.org/');
    });

    it('should handle default graphs', async () => {
      return expect(Util.termToValue(defaultGraph()))
        .toEqual({ '@id': '' });
    });

    it('should handle default graphs with compactIds true', async () => {
      return expect(Util.termToValue(defaultGraph(), { compactIds: true }))
        .toEqual('');
    });

    it('should handle blank nodes', async () => {
      return expect(Util.termToValue(blankNode('b0')))
        .toEqual({ '@id': '_:b0' });
    });

    it('should handle blank nodes with compactIds true', async () => {
      return expect(Util.termToValue(blankNode('b0'), { compactIds: true }))
        .toEqual('_:b0');
    });

    it('should handle literals without language and datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc')))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle literals without language and datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc'), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle literals with language with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc', 'en')))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle literals with language with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc', 'en'), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle string literals with unknown datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('abc', namedNode('http://ex.org/type'))))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string literals with unknown datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('abc', namedNode('http://ex.org/type')), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string literals with number datatype with useNativeTypes false', async () => {
      return expect(Util.termToValue(literal('10', namedNode('http://www.w3.org/2001/XMLSchema#number'))))
        .toEqual({ '@value': '10', '@type': 'http://www.w3.org/2001/XMLSchema#number' });
    });

    it('should handle string literals with number datatype with useNativeTypes true', async () => {
      return expect(Util.termToValue(literal('10', namedNode('http://www.w3.org/2001/XMLSchema#number')),
        { useNativeTypes: true })).toEqual({ '@value': 10 });
    });
  });

});
