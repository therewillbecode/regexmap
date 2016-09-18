'use strict';

const _ = require('lodash');

const listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;
let listingRegexes = new listingRegexesClass;

// RegexObj stores list of regular expressions to extract each data point
let getData = (ListingText, regexObj) => {
  if (ListingText === undefined){
    return {}
  }

  return {};
}

// returns object of matches for regexps
let mapRegexps = (regexpObject) => _.mapValues(regexpObject, (i,v,k)=>{
console.log(i)
console.log(k)
(console.log(k))
  getMatch
});
// matches regex and returns given group
let getMatch = (regexp, myString) =>  myString.match(regexp); 


module.exports = {
  getData: getData,
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 
