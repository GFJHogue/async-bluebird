var async = require('async');
var Promise = require('bluebird');
var asyncFunctions = require('./asyncFunctions.js');

for (var property in async) if (asyncFunctions[property] != null) {
  async[property] = Promise.promisify(async[property], asyncFunctions[property]);
}

module.exports = async;
module.exports.async = async;
module.exports.Promise = Promise;
