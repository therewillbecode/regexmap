'use strict';

const _ = require('lodash');

 /**
   * Maps dict like object of regular expressions to their match results for a given string.
   *
   * @private
   * @param {Object} Contains regex name and a regexp object i.e { 'name': /alexa/ } to iterate over.
   * @param {String} The string for which to match the regexps in each property of object.
   * @returns {Object} Returns the original object where property values are the result of the match.
   */
let mapRegexps = (regexpDict, sourceTxt) => _.mapValues(regexpDict, (val, key, obj) => {
   if (_.isObject(regexpDict) === false ) {
    throw TypeError("regexpDict must be dict like object where prop value is a regexp i.e { 'name': /alexa/ }");
   }

   return getMatch(val, sourceTxt);
});

// matches regex and returns given group
let getMatch = (regexp, sourceTxt) => {
  let match = sourceTxt.match(regexp);

    return match
}

module.exports = {
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 

