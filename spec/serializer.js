const { ErrorSkipped } = require('rdf-test-suite');
const { JsonLdSerializer } = require('..');

module.exports = {
  serialize(data, baseIRI, options) {
    if (options.processingMode && (options.processingMode !== '1.0' && options.processingMode !== '1.1')) {
      return Promise.reject(
        new ErrorSkipped(`Test with processing mode ${options.processingMode} was skipped, only 1.0 is supported.`),
      );
    }
    if (options.specVersion && !(options.specVersion === '1.1' || options.specVersion === 'star')) {
      console.log(options.specVersion); // TODO
      return Promise.reject(
        new ErrorSkipped(`Test with spec version ${options.specVersion} was skipped, only 1.1 and json-ld-star are supported.`),
      );
    }
    return require('stream-to-string')(require('streamify-array')([ ...data ])
      .pipe(new JsonLdSerializer({ baseIRI, space: '  ', excludeContext: true, ...options })));
  },
};
