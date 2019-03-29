import {blankNode, defaultGraph, literal, namedNode, quad, triple} from "@rdfjs/data-model";
import {JsonLdSerializer} from "../../lib/JsonLdSerializer";

// tslint:disable:no-var-requires
const stringifyStream = require('stream-to-string');
const streamifyArray = require('streamify-array');

describe('JsonLdSerializer', () => {

  let serializer;

  beforeEach(() => {
    serializer = new JsonLdSerializer();
  });

  it('should serialize an empty stream', async () => {
    const stream = streamifyArray([]);
    return expect(await stringifyStream(stream.pipe(serializer))).toEqual(`[]`);
  });

  it('should serialize a single triple', async () => {
    const stream = streamifyArray([
      triple(namedNode('http://ex.org/myid'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
    ]);
    return expect(JSON.parse(await stringifyStream(stream.pipe(serializer))))
      .toEqual([
        {
          "@id": "http://ex.org/myid",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
          ],
        },
      ]);
  });

  it('should serialize two triples with different subjects and predicates', async () => {
    const stream = streamifyArray([
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred2'), literal('http://ex.org/obj1')),
    ]);
    return expect(JSON.parse(await stringifyStream(stream.pipe(serializer))))
      .toEqual([
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
          ],
        },
        {
          "@id": "http://ex.org/myid2",
          "http://ex.org/pred2": [
            "http://ex.org/obj1",
          ],
        },
      ]);
  });

  it('should serialize two triples with different subjects but equal predicates', async () => {
    const stream = streamifyArray([
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid2'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
    ]);
    return expect(JSON.parse(await stringifyStream(stream.pipe(serializer))))
      .toEqual([
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
          ],
        },
        {
          "@id": "http://ex.org/myid2",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
          ],
        },
      ]);
  });

  it('should serialize two triples with equal subjects but different predicates', async () => {
    const stream = streamifyArray([
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred2'), literal('http://ex.org/obj1')),
    ]);
    return expect(JSON.parse(await stringifyStream(stream.pipe(serializer))))
      .toEqual([
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
          ],
          "http://ex.org/pred2": [
            "http://ex.org/obj1",
          ],
        },
      ]);
  });

  it('should serialize two triples with equal subjects and predicates', async () => {
    const stream = streamifyArray([
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj1')),
      triple(namedNode('http://ex.org/myid1'), namedNode('http://ex.org/pred1'), literal('http://ex.org/obj2')),
    ]);
    return expect(JSON.parse(await stringifyStream(stream.pipe(serializer))))
      .toEqual([
        {
          "@id": "http://ex.org/myid1",
          "http://ex.org/pred1": [
            "http://ex.org/obj1",
            "http://ex.org/obj2",
          ],
        },
      ]);
  });

});
