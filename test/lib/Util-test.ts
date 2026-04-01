import { ERROR_CODES, ErrorCoded, JsonLdContextNormalized } from 'jsonld-context-parser';
import { DataFactory } from 'rdf-data-factory';
import { Util } from '../../lib/Util';

const DF = new DataFactory();

describe('Util', () => {
  describe('stringToNativeType', () => {
    it('should handle unknown types', async() => {
      expect(Util.stringToNativeType('abc', 'http://ex.org/type'))
        .toBe('abc');
    });

    it('should handle unknown XSD types', async() => {
      expect(Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#unknown'))
        .toBe('abc');
    });

    it('should handle true xsd:boolean', async() => {
      expect(Util.stringToNativeType('true', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toBe(true);
    });

    it('should handle false xsd:boolean', async() => {
      expect(Util.stringToNativeType('false', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toBe(false);
    });

    it('should error on invalid xsd:boolean', async() => {
      expect(() => Util.stringToNativeType('invalid', 'http://www.w3.org/2001/XMLSchema#boolean'))
        .toThrow(new Error('Invalid xsd:boolean value \'invalid\''));
    });

    it('should handle xsd:integer', async() => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#integer')).toBe(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#integer')).toBe(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#integer')).toBe(999);
    });

    it('should error on invalid xsd:integer', async() => {
      expect(() => Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#integer'))
        .toThrow(new Error('Invalid xsd:integer value \'abc\''));
    });

    it('should handle xsd:number', async() => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#number')).toBe(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#number')).toBe(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#number')).toBe(999);
    });

    it('should handle xsd:int', async() => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#int')).toBe(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#int')).toBe(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#int')).toBe(999);
    });

    it('should handle xsd:byte', async() => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#byte')).toBe(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#byte')).toBe(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#byte')).toBe(999);
    });

    it('should handle xsd:long', async() => {
      expect(Util.stringToNativeType('0', 'http://www.w3.org/2001/XMLSchema#long')).toBe(0);
      expect(Util.stringToNativeType('10', 'http://www.w3.org/2001/XMLSchema#long')).toBe(10);
      expect(Util.stringToNativeType('999', 'http://www.w3.org/2001/XMLSchema#long')).toBe(999);
    });

    it('should handle xsd:float', async() => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#float')).toBe(0);
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#float')).toBe(10.1);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#float')).toBe(123.45);
    });

    it('should error on invalid xsd:float', async() => {
      expect(() => Util.stringToNativeType('abc', 'http://www.w3.org/2001/XMLSchema#float'))
        .toThrow(new Error('Invalid xsd:float value \'abc\''));
    });

    it('should handle xsd:decimal', async() => {
      expect(Util.stringToNativeType('0.0', 'http://www.w3.org/2001/XMLSchema#decimal')).toBe('0.0');
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#decimal')).toBe('10.10');
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#decimal')).toBe('1.2345E2');
    });

    it('should handle xsd:double', async() => {
      expect(Util.stringToNativeType('10.10', 'http://www.w3.org/2001/XMLSchema#double')).toBe(10.1);
      expect(Util.stringToNativeType('1.2345E2', 'http://www.w3.org/2001/XMLSchema#double')).toBe(123.45);
    });
  });

  describe('termToValue', () => {
    it('should handle named nodes', async() => {
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), new JsonLdContextNormalized({})))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with compactIds true', async() => {
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { compactIds: true }))
        .toBe('http://ex.org/');
    });

    it('should handle named nodes without context vocab in vocab mode', async() => {
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { vocab: true }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes without context vocab in base mode', async() => {
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), new JsonLdContextNormalized({}), { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context vocab in vocab mode', async() => {
      const context = new JsonLdContextNormalized({ '@vocab': 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': '' });
    });

    it('should handle named nodes with context vocab in base mode', async() => {
      const context = new JsonLdContextNormalized({ '@vocab': 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context base in vocab mode', async() => {
      const context = new JsonLdContextNormalized({ '@base': 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context base in base mode', async() => {
      const context = new JsonLdContextNormalized({ '@base': 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': '' });
    });

    it('should handle named nodes with context term in vocab mode', async() => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: true }))
        .toEqual({ '@id': 'ex' });
    });

    it('should handle named nodes with context term in base mode', async() => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/'), context, { vocab: false }))
        .toEqual({ '@id': 'http://ex.org/' });
    });

    it('should handle named nodes with context prefix in vocab mode', async() => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/aa'), context, { vocab: true }))
        .toEqual({ '@id': 'ex:aa' });
    });

    it('should handle named nodes with context prefix in base mode', async() => {
      const context = new JsonLdContextNormalized({ ex: 'http://ex.org/' });
      expect(Util.termToValue(DF.namedNode('http://ex.org/aa'), context, { vocab: false }))
        .toEqual({ '@id': 'ex:aa' });
    });

    it('should handle default graphs', async() => {
      expect(Util.termToValue(DF.defaultGraph(), new JsonLdContextNormalized({})))
        .toEqual({ '@id': '' });
    });

    it('should handle default graphs with compactIds true', async() => {
      expect(Util.termToValue(DF.defaultGraph(), new JsonLdContextNormalized({}), { compactIds: true }))
        .toBe('');
    });

    it('should handle blank nodes', async() => {
      expect(Util.termToValue(DF.blankNode('b0'), new JsonLdContextNormalized({})))
        .toEqual({ '@id': '_:b0' });
    });

    it('should handle blank nodes with compactIds true', async() => {
      expect(Util.termToValue(DF.blankNode('b0'), new JsonLdContextNormalized({}), { compactIds: true }))
        .toBe('_:b0');
    });

    it('should return empty object for unknown term types', async() => {
      expect(Util.termToValue(DF.variable('x'), new JsonLdContextNormalized({})))
        .toEqual({});
    });

    it('should handle DF.literals without language and datatype with useNativeTypes false', async() => {
      expect(Util.termToValue(DF.literal('abc'), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle DF.literals without language and datatype with useNativeTypes true', async() => {
      expect(Util.termToValue(DF.literal('abc'), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc' });
    });

    it('should handle DF.literals with language with useNativeTypes false', async() => {
      expect(Util.termToValue(DF.literal('abc', 'en'), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle DF.literals with language with useNativeTypes true', async() => {
      expect(Util.termToValue(DF.literal('abc', 'en'), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@language': 'en' });
    });

    it('should handle string DF.literals with unknown datatype with useNativeTypes false', async() => {
      expect(Util.termToValue(DF.literal('abc', DF.namedNode('http://ex.org/type')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string DF.literals with unknown datatype with useNativeTypes true', async() => {
      expect(Util.termToValue(DF.literal('abc', DF.namedNode('http://ex.org/type')), new JsonLdContextNormalized({}), { useNativeTypes: true }))
        .toEqual({ '@value': 'abc', '@type': 'http://ex.org/type' });
    });

    it('should handle string DF.literals with number datatype with useNativeTypes false', async() => {
      expect(Util.termToValue(DF.literal('10', DF.namedNode('http://www.w3.org/2001/XMLSchema#number')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': '10', '@type': 'http://www.w3.org/2001/XMLSchema#number' });
    });

    it('should handle string DF.literals with number datatype with useNativeTypes true', async() => {
      expect(Util.termToValue(DF.literal('10', DF.namedNode('http://www.w3.org/2001/XMLSchema#number')), new JsonLdContextNormalized({}), { useNativeTypes: true })).toEqual({ '@value': 10 });
    });

    it('should handle string DF.literals with decimal datatype with useNativeTypes true', async() => {
      expect(Util.termToValue(DF.literal('10', DF.namedNode('http://www.w3.org/2001/XMLSchema#decimal')), new JsonLdContextNormalized({}), { useNativeTypes: true })).toEqual(
        { '@value': '10', '@type': 'http://www.w3.org/2001/XMLSchema#decimal' },
      );
    });

    it('should handle string DF.literals with JSON datatype', async() => {
      expect(Util.termToValue(DF.literal('true', DF.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': true, '@type': '@json' });
      expect(Util.termToValue(DF.literal('{"a":"b"}', DF.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON')), new JsonLdContextNormalized({})))
        .toEqual({ '@value': { a: 'b' }, '@type': '@json' });
    });

    it('should handle string DF.literals with I18N datatype', async() => {
      expect(Util.termToValue(DF.literal('bla', DF.namedNode('https://www.w3.org/ns/i18n#en-us_rtl')), new JsonLdContextNormalized({}))).toEqual(
        { '@value': 'bla', '@type': 'https://www.w3.org/ns/i18n#en-us_rtl' },
      );
    });

    it('should handle string DF.literals with I18N datatype with rdfDirection: i18n-datatype', async() => {
      expect(Util.termToValue(DF.literal('bla', DF.namedNode('https://www.w3.org/ns/i18n#en-us_rtl')), new JsonLdContextNormalized({}), { rdfDirection: 'i18n-datatype' })).toEqual(
        { '@value': 'bla', '@language': 'en-us', '@direction': 'rtl' },
      );
      expect(Util.termToValue(DF.literal('bla', DF.namedNode('https://www.w3.org/ns/i18n#_rtl')), new JsonLdContextNormalized({}), { rdfDirection: 'i18n-datatype' })).toEqual(
        { '@value': 'bla', '@direction': 'rtl' },
      );
      expect(Util.termToValue(DF.literal('bla', DF.namedNode('https://www.w3.org/ns/i18n#en-us_')), new JsonLdContextNormalized({}), { rdfDirection: 'i18n-datatype' })).toEqual(
        { '@value': 'bla', '@language': 'en-us' },
      );
    });

    it('should handle string DF.literals with base direction with rdfDirection: undefined', async() => {
      expect(Util.termToValue(
        DF.literal('bla', { language: 'en-us', direction: 'rtl' }),
        new JsonLdContextNormalized({}),
      )).toEqual(
        { '@value': 'bla', '@language': 'en-us', '@direction': 'rtl' },
      );
    });

    it('should throw on invalid string DF.literals with JSON datatype', async() => {
      const invalidLiteral = DF.literal('{', DF.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON'));
      expect(() => Util.termToValue(invalidLiteral, new JsonLdContextNormalized({})))
        .toThrow('Invalid JSON literal');
      let caughtError: unknown;
      try {
        Util.termToValue(invalidLiteral, new JsonLdContextNormalized({}));
      } catch (e) {
        caughtError = e;
      }
      expect(caughtError).toBeInstanceOf(ErrorCoded);
      expect((<ErrorCoded> caughtError).code).toEqual(ERROR_CODES.INVALID_JSON_LITERAL);
    });
  });
});
