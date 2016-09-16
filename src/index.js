'use strict';

var listingRegexes = require('./src/index.js');

let privateVariable = 10;

let privateMethod = () => {
    console.log('Inside a private method!');
    privateVariable++;
}

let getData = () => {
  console.log('This is a method I want to expose!');
}


module.exports = {
  privateMethod: privateMethod,
  extracts: getData
} 
