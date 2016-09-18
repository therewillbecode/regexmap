'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;

var index = require('../src/index.js');

var listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");
var listing2 = fs.readFileSync('./test/fixtures/listing2.txt', "utf8");


 
describe('when given', function() {
                         let t = 7

    before( function() {
        // executes once, before all tests 

    });
 
    beforeEach( function() {
        // executes before each test of the suite

    });
 
    after( function() {
        // executes once, after all tests
    });
 
    afterEach( function() {
        // executes after each test of the suite
    });
        
    it('an arg not of string type', function() {
        // a test containing assertions
        expect(index.extracts).to.be.defined;
  
    });

    it('an arg not of string type', function() {
        // a test containing assertions
        expect(
            function getData () {
                index.extracts(6);
            }).to.throw(TypeError);

        expect(
            function getData () {
                index.extracts({'t':1});
            }).to.throw(TypeError);

        expect(
            function getData() {
                index.extracts();
            }).to.throw(TypeError);
    });
});
 
describe('Regex for', function() {
    it('location should give', function() {
        // a test containing assertions
        expect(listing1.match(listingRegexes.location)).to.equal.('London');
    });

});
