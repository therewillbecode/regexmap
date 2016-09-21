'use strict';

const _ = require('lodash');

// maps dict like object of regular expressions to their match results for a given string
let mapRegexps = (regexpDict, sourceTxt) => _.mapValues(regexpDict, (val, key, obj) => {
   if (_.isObject(regexpDict) === false ) {
    throw TypeError('Arg1 must be dict like object where property values are regular expression');
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

