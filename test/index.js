'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;

var index = require('../src/index.js');

var listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");
var listing2 = fs.readFileSync('./test/fixtures/listing2.txt', "utf8");
let testRegexp = /(?:","truncated_localized_city":")([\w ]+)/
 
describe('get data', function() {

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
        // executes after each test of the suites
    });
        
    it('should return an object', function() {
        expect(index.getData('teststring')).to.be.an('object');
    });

    it('should throw typerror when arg not of string type', function() {
        expect(
            function getData () {
                index.getData(6);
            }).to.throw(TypeError);

        expect(
            function getData () {
                index.getData({'t':1});
            }).to.throw(TypeError);

        expect(
            function getData() {
                index.getData();
            }).to.throw(TypeError);
    });
});


describe('get match', function() {
    it('should be return a string', function() {
        expect(index.getMatch(testRegexp, listing1, 1)).to.be.an('string');
    });

    it('array should contain regex match', function() {
        expect(index.getMatch(testRegexp, listing1, 1)).to.equal('London');
    });

    it('should return null if no match', function() {
        expect(index.getMatch(testRegexp, 'testString', 1)).to.be.a('null');
    });

    it('should throw TypeError if arg 1 is not a valid regex', function() {
          expect(function() {
            expect(index.getMatch('invalidRegex', 'testString', 0)).to.be('null');
        }).to.throw(TypeError);
    });
});


describe('mapRegexps', function() {
    let testRegexpObj = {'city': testRegexp}
   
    it('should return an object', function() {
        expect(index.mapRegexps(testRegexpObj, listing1)).to.be.an('object');
    });

    it('should return an object with original property key', function() {
        expect(index.mapRegexps(testRegexpObj, listing1)).hasOwnProperty('city');
    });

    it('should return an object with matched value', function() {
        expect(index.mapRegexps(testRegexpObj, listing1)).property('city', 'London');
    });

     let testRegexpObjMultiProp = {
        'city': testRegexp, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should match values for multiple properties of object', function() {
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)).property('city', 'London');
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)).property('lat', '51.507351');
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)).property('lng', '-0.127758');
    });

    let testRegexpObjNullProps = {
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/,
        'colour': /bluewhite/
    };

    it('should map non-matched regexps as null', function() {
        expect(index.mapRegexps(testRegexpObjNullProps, listing1)).property('lat', '51.507351');
        expect(index.mapRegexps(testRegexpObjNullProps, listing1)).property('colour', null);
    });
});


