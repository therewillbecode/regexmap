'use strict';

const _ = require('lodash');

/**
   * Maps dict like object of regular expressions to their match results for a given string.
   *
   * @private
   * @param {Object} Contains regex name and a regexp object i.e { 'name': /alexa/, 'age': \d{2} } to iterate over.
   * @param {String} The string for which to match the regexps in each property of object.
   * @returns {Object} Returns the original object where property values are the result of the match.
   */
let mapRegexps = (regexpDict, sourceTxt) => _.mapValues(regexpDict, (val, key, obj) => {
   validateRegexObj(regexpDict)
   
   return getMatch(val, sourceTxt);
});

// checks obj is object with regexp values i.e { 'name': /alexa/, 'age': \d{2} } 
 let validateRegexObj = (obj) => {
  	_.forOwn(obj, (value, key) => {
  		if(_.isRegExp(value) === false) {
  			    throw TypeError("regexpDict must be dict like object where prop value is a regexp i.e { 'name': /alexa/ }");
  		} 
  	});
};

// matches regex
let getMatch = (regexp, sourceTxt) => {
  let match = sourceTxt.match(regexp);

    return match
};

module.exports = {
  mapRegexps: mapRegexps,
  getMatch: getMatch,
  validateRegexObj: validateRegexObj
};

