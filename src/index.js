'use strict';

const _ = require('lodash');

const listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;
let listingRegexes = new listingRegexesClass;

let fs = require('fs');


let listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");


// RegexObj stores list of regular expressions to extract each data point
let getData = (ListingText, regexObj) => {
  if (ListingText === undefined){
    return {}
}

    return mapRegexps(regexpObject)
}

// maps dict like object of regular expressions to their match results for a given string
let mapRegexps = (regexpDict, sourceTxt) => _.mapValues(regexpDict, (val, key, obj) => {
   if (_.isObject(regexpDict) === false ) {
    throw TypeError('Arg1 must be object where property values are regexpb objs');
   }

   return getMatch(val, sourceTxt);
});

// matches regex and returns given group
let getMatch = (regexp, sourceTxt) => {
  let match = sourceTxt.match(regexp);


  //if (_.isInteger(matchGroup) === true && _.isArray(match)){
 //   return _.nth(match, matchGroup)
 // } else{
    return match
 // }
}

let g =getMatch(/j/,'t')
console.log(g)

module.exports = {
  getData: getData,
  mapRegexps: mapRegexps,
  getMatch: getMatch
} 
