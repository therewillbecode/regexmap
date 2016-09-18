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
    it('should be return an array', function() {
        expect(index.getMatch(testRegexp, listing1)).to.be.an('array');
    });

    it('array should contain regex match', function() {
        expect(index.getMatch(testRegexp, listing1)).to.contain('London');
    });

    it('should return null if no match', function() {
        expect(index.getMatch(testRegexp, 'testString')).to.be.a('null');
    });

    it('should throw TypeError if arg 2 is not a valid regex', function() {
          expect(function() {
            expect(index.getMatch('testString', null)).to.be('null');
        }).to.throw(TypeError);
    });
});


describe('mapRegexps', function() {
    let testRegexpObj = {'city': testRegexp}
    let testRegexpObjMultiProp = {
        'city': testRegexp, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should return an object', function() {
        expect(index.getMatch(testRegexp, listing1)).to.be.an('object');
    });

    it('should return an object with original property key', function() {
        expect(index.mapRegexps(testRegexpObj, listing1)).hasOwnProperty('city');
    });

    it('should return an object with matched value', function() {
        expect(index.mapRegexps(testRegexpObj, listing1)).property('city', 'London');
    });

    it('should match values for multiple properties of object', function() {
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)).to.equal({
            'city': 'London',
            'lat': 51.507351,
            'lng': -0.127758
        });
    });
});
