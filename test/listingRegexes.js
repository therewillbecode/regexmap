'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;

var index = require('../src/index.js');
var listingRegexesClass = require('../src/listingRegexes.js').listingRegexes;
let listingRegexes = new listingRegexesClass;


var listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");
var listing2 = fs.readFileSync('./test/fixtures/listing2.txt', "utf8");
var listing3 = fs.readFileSync('./test/fixtures/listing3.txt', "utf8");


describe('Regex for', function() {
    it('location should be correct', function() {
        // a test containing assertions
        expect(listing1.match(listingRegexes.city)[1]).to.equal('London');
        expect(listing2.match(listingRegexes.city)[1]).to.equal('London');
        expect(listing3.match(listingRegexes.city)[1]).to.equal('Santiago');
    });
});
