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
        expect(index.getMatch(listing1, testRegexp)).to.be.an('array');
    });

    it('array should contain regex match', function() {
        expect(index.getMatch(listing1, testRegexp)).to.contain('London');
    });

    it('should return null if no match', function() {
        expect(index.getMatch('testString', testRegexp)).to.be('null');
    });

    it('should return null if arg 2 is not a valid regex', function() {
        expect(index.getMatch('testString', 'hjh')).to.be('null');
        expect(index.getMatch('testString', null)).to.be('null');
        expect(index.getMatch('testString', {'f':1})).to.be('null');
    });
});


describe('mapRegexps', function() {
    let testRegexpObj = {'city': 'testRegexp'}
    let testRegexpObjMultiProp = {
        'city': 'testRegexp', 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should return an object with original property name', function() {
        expect(index.mapRegexps(listing1, testRegexpObj)).to.equal({
            'city': 'London'
        });
    });

    it('should return an object with matched value', function() {
        expect(index.mapRegexps(listing1, testRegexpObj)).to.equal({
            'city': 'London'
        });
    });

    it('should match values for multiple properties of object', function() {
        expect(index.mapRegexps(listing1, testRegexpObj)).to.equal({
            'city': 'London',
            'lat': 51.507351,
            'lng': -0.127758
        });
    });
});
