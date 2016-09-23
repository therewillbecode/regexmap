"use strict";

const _ = require("lodash");

/**
 * Maps dict like object of regular expressions to their match results for a given string.
 *
 * @private
 * @param {Object} Contains regex name and a regexp object i.e { 'name': /alexa/, 'age': /\d{2}/ } to iterate over.
 * @param {String} The string for which to match the regexps in each property of object.
 * @returns {Object} Returns the original object where property values are the result of the match.
 */
function mapRegexps(regexpDict, sourceTxt) {
  validateRegexObj(regexpDict);
  
  return _.mapValues(regexpDict, (val, key, obj) => getMatch(val, sourceTxt));
};

// obj should be in format { 'name': /alexa/, 'age': \d{2} } 
function validateRegexObj(obj) {
  let invalidObjectErr = "expects object where property values are regexps i.e { 'name': /alexa/ }";
  
  if (_.isObject(obj) ===false){
    throw TypeError(invalidObjectErr);
  }

  _.forOwn(obj, (value, key) => {
    if (_.isRegExp(value) === false) {
      throw TypeError(invalidObjectErr);
    }
  });
};

function getMatch(regexp, sourceTxt) {
  let match = sourceTxt.match(regexp);

  return match;
};

module.exports = {
  mapRegexps: mapRegexps,
  getMatch: getMatch,
  validateRegexObj: validateRegexObj
};