'use strict';

var _ = require('lodash');

var listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;

let listingRegexes = new listingRegexesClass;

// RegexObj stores list of regular expressions to extract each data point
let getData = (ListingText, regexObj) => {
  if (ListingText === undefined){
    return {}
  }

  return mapRegexps;

}


let getMatch = (regexp) => matchRegexp(myString, regexp, group);

// returns object of matches for regexps
let mapRegexps = (regexpObject, myString) => _.mapValues(regexpObject, getMatch);

// matches regex and returns given group
let matchRegexp = (myString, regexp, group) =>  regexp.exec(this.myString)[group];


module.exports = {
  getData: getData,
  matchRegexp: matchRegexp,
  getMatch: getMatch
} 
