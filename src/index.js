'use strict';

const _ = require('lodash');

const listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;
let listingRegexes = new listingRegexesClass;

let fs = require('fs');

let listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");

// maps dict like object of regular expressions to their match results for a given string
let mapRegexps = (regexpDict, sourceTxt) => _.mapValues(regexpDict, (val, key, obj) => {
   if (_.isObject(regexpDict) === false ) {
    throw TypeError('Arg1 must be dict like object where property values are regular expression');
   }

   return getMatch(val, sourceTxt);
});

// statistics for which regexes worked

// matches regex and returns given group
let getMatch = (regexp, sourceTxt) => {
  let match = sourceTxt.match(regexp);

    return match
}

let testRegexpObjMultiProp = {
        'city': /hj/, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };


module.exports = {
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 

