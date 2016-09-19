'use strict';

const _ = require('lodash');

const listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;
let listingRegexes = new listingRegexesClass;

var fs = require('fs');


var listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");


// RegexObj stores list of regular expressions to extract each data point
let getData = (ListingText, regexObj) => {
  if (ListingText === undefined){
    return {}
}

    return mapRegexps(regexpObject)
}

// returns object of matches for regexps - specify optional match group
let mapRegexps = (regexpObject, sourceTxt, matchGroup) => _.mapValues(regexpObject, (val, key, obj) => {
   return getMatch(val, sourceTxt, matchGroup);
});

// matches regex and returns given group
let getMatch = (regexp, sourceTxt, matchGroup) => {
  let match = sourceTxt.match(regexp);

  if (match === null) return null 

  if (_.isInteger(matchGroup) === true && _.isArray(match)){
    return _.nth(match, matchGroup)
  } else{
    return match
  }
}

module.exports = {
  getData: getData,
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 
