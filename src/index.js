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

// returns object of matches for regexps
let mapRegexps = (regexpObject, sourceTxt) => _.mapValues(regexpObject, (val, key, obj) => {
   return getMatch(val, sourceTxt, 1);
});

// matches regex and returns given group
let getMatch = (regexp, sourceTxt, matchGroup) => sourceTxt.match(regexp)[matchGroup]; 


module.exports = {
  getData: getData,
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 
