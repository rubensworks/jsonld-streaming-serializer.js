import {blankNode, defaultGraph, literal, namedNode, quad, triple} from "@rdfjs/data-model";
import {PassThrough} from "stream";
import {JsonLdSerializer} from "../../lib/JsonLdSerializer";

// tslint:disable:no-var-requires
const stringifyStream = require('stream-to-string');
const streamifyArray = require('streamify-array');

describe('JsonLdSerializer', () => {

  let serializer: JsonLdSerializer;

  beforeEach(() => {
    serializer = new JsonLdSerializer();
  });

  it('should serialize an empty stream', async () => {
    const quads = [];
    return expect(await serialize(quads)).toEqual(
      [
      ],
    );
  });

  it('should serialize a single triple', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize a single triple with blank node subject', async () => {
    const quads = [
      triple(blankNode('b1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "_:b1",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize two triples with different subjects and predicates', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred2'), namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
        {
          "@id": "http://ex.org/myid2",
          "http://ex.org/pred2": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize two triples with different subjects but equal predicates', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
        {
          "@id": "http://ex.org/myid2",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize two triples with equal subjects but different predicates', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred2'), namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
          ],
          "http://ex.org/pred2": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize two triples with equal subjects and predicates', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), namedNode('http://ex.org/obj2')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@id": "http://ex.org/obj1" },
            { "@id": "http://ex.org/obj2" },
          ],
        },
      ]);
  });

  it('should serialize rdf:type predicates to @type with compacted object IRIs', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "@type": [
            "http://ex.org/obj1",
          ],
        },
      ]);
  });

  it('should not serialize rdf:type predicates to @type if useRdfType is true', async () => {
    const customSerializer = new JsonLdSerializer({ useRdfType: true });
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        namedNode('http://ex.org/obj1')),
    ];
    return expect(await serialize(quads, customSerializer)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": [
            { "@id": "http://ex.org/obj1" },
          ],
        },
      ]);
  });

  it('should serialize string literals', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('abc')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('def')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": "abc" },
            { "@value": "def" },
          ],
        },
      ]);
  });

  it('should serialize language-tagged literals', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('abc', 'en')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('def', 'nl')),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": "abc", "@language": "en" },
            { "@value": "def", "@language": "nl" },
          ],
        },
      ]);
  });

  it('should serialize literals with unknown type', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('abc', namedNode('http://ex.org/type'))),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('def', namedNode('http://ex.org/type'))),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": "abc", "@type": "http://ex.org/type" },
            { "@value": "def", "@type": "http://ex.org/type" },
          ],
        },
      ]);
  });

  it('should serialize literals with integer type', async () => {
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('10', namedNode('http://www.w3.org/2001/XMLSchema#integer'))),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('20', namedNode('http://www.w3.org/2001/XMLSchema#integer'))),
    ];
    return expect(await serialize(quads)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": "10", "@type": "http://www.w3.org/2001/XMLSchema#integer" },
            { "@value": "20", "@type": "http://www.w3.org/2001/XMLSchema#integer" },
          ],
        },
      ]);
  });

  it('should serialize literals with integer type when useNativeTypes is true', async () => {
    const customSerializer = new JsonLdSerializer({ useNativeTypes: true });
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('10', namedNode('http://www.w3.org/2001/XMLSchema#integer'))),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('20', namedNode('http://www.w3.org/2001/XMLSchema#integer'))),
    ];
    return expect(await serialize(quads, customSerializer)).toEqual(
      [
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": 10 },
            { "@value": 20 },
          ],
        },
      ]);
  });

  it('should fail to serialize invalid literals with integer type when useNativeTypes is true', async () => {
    const customSerializer = new JsonLdSerializer({ useNativeTypes: true });
    const quads = [
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'),
        literal('abc', namedNode('http://www.w3.org/2001/XMLSchema#integer'))),
    ];
    return expect(serialize(quads, customSerializer)).rejects.toThrow(new Error('Invalid xsd:integer value \'abc\''));
  });

  async function serialize(quadsArray, customSerializer?) {
    return JSON.parse(await stringifyStream(streamifyArray(quadsArray).pipe(customSerializer || serializer)));
  }

  describe('#import', () => {
    it('should parse a stream', async () => {
      const quads = [
        triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('abc')),
        triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('def')),
      ];
      return expect(JSON.parse(await stringifyStream(streamifyArray(quads).pipe(serializer)))).toEqual([
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            { "@value": "abc" },
            { "@value": "def" },
          ],
        },
      ]);
    });

    it('should parse another stream', async () => {
      const quads = [
        triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred1'), literal('abc')),
        triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred1'), literal('def')),
      ];
      return expect(JSON.parse(await stringifyStream(streamifyArray(quads).pipe(serializer)))).toEqual([
        {
          "@id": "http://ex.org/myid2",
          "http://ex.org/pred1": [
            { "@value": "abc" },
            { "@value": "def" },
          ],
        },
      ]);
    });

    it('should forward error events', async () => {
      const stream = new PassThrough();
      stream._read = () => stream.emit('error', new Error('my error'));
      return expect(stringifyStream(serializer.import(stream))).rejects.toThrow(new Error('my error'));
    });
  });

});
