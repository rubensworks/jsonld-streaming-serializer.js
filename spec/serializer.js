const { JsonLdSerializer } = require("..");
const { ErrorSkipped } = require('rdf-test-suite');

module.exports = {
  serialize: function (data, baseIRI, options) {
    if (options.processingMode && options.processingMode !== '1.0') {
      return Promise.reject(
        new ErrorSkipped(`Test with processing mode ${options.processingMode} was skipped, only 1.0 is supported.`));
    }
    if (options.specVersion && options.specVersion !== '1.0') {
      return Promise.reject(
        new ErrorSkipped(`Test with spec version ${options.specVersion} was skipped, only 1.0 is supported.`));
    }
    return require('stream-to-string')(require('streamify-array')(data)
      .pipe(new JsonLdSerializer(Object.assign({ baseIRI, allowOutOfOrderContext: true, validateValueIndexes: true }, options))));
  },
};
