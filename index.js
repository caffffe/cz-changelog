"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./commitTypes');

module.exports = engine({
  types: conventionalCommitTypes.types
});
