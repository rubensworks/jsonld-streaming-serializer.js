# JSON-LD Streaming Serializer

[![Build Status](https://travis-ci.org/rubensworks/jsonld-streaming-serializer.js.svg?branch=master)](https://travis-ci.org/rubensworks/jsonld-streaming-serializer.js)
[![Coverage Status](https://coveralls.io/repos/github/rubensworks/jsonld-streaming-serializer.js/badge.svg?branch=master)](https://coveralls.io/github/rubensworks/jsonld-streaming-serializer.js?branch=master)
[![npm version](https://badge.fury.io/js/jsonld-streaming-serializer.svg)](https://www.npmjs.com/package/jsonld-streaming-serializer) [![Greenkeeper badge](https://badges.greenkeeper.io/rubensworks/jsonld-streaming-serializer.js.svg)](https://greenkeeper.io/)

A fast and lightweight _streaming_ and 100% _spec-compliant_ [JSON-LD](https://json-ld.org/) serializer,
with [RDFJS](https://github.com/rdfjs/representation-task-force/) representations of RDF terms, quads and triples.

## Installation

```bash
$ npm install jsonld-streaming-serializer
```

or

```bash
$ yarn add jsonld-streaming-serializer
```

This package also works out-of-the-box in browsers via tools such as [webpack](https://webpack.js.org/) and [browserify](http://browserify.org/).

## Require

```javascript
import {JsonLdSerializer} from "jsonld-streaming-serializer";
```

_or_

```javascript
const JsonLdSerializer = require("jsonld-streaming-serializer").JsonLdSerializer;
```


## Usage

TODO

## Restrictions

* RDF lists are not converted to @list
* No deduplication of triples

## License
This software is written by [Ruben Taelman](http://rubensworks.net/).

This code is released under the [MIT license](http://opensource.org/licenses/MIT).
