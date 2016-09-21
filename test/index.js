'use strict';

let fs = require('fs');
let chai = require('chai');
let expect = require('chai').expect;

let index = require('../src/index.js');

let listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");
let listing2 = fs.readFileSync('./test/fixtures/listing2.txt', "utf8");
let testRegexp = /(?:","truncated_localized_city":")([\w ]+)/
 
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

    it('should throw TypeError if arg 1 is not a valid regex', function() {
          expect(function() {
            expect(index.getMatch('invalidRegex', 'testString')).to.be('null');
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
        expect(index.mapRegexps(testRegexpObj, listing1)['city']).to.contain('London');
    });

     let testRegexpObjMultiProp = {
        'city': testRegexp, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should match values for multiple properties of object', function() {
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)['city']).to.contain('London');
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)['lat']).to.contain('51.507351');
        expect(index.mapRegexps(testRegexpObjMultiProp, listing1)['lng']).to.contain('-0.127758');
    });

    let testRegexpObjNullProps = {
        'colour': /bluewhite/,
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,

    };

    it('should map non-matched regexps as null', function() {
        expect(index.mapRegexps(testRegexpObjNullProps, listing1)['colour']).to.be.null;
        expect(index.mapRegexps(testRegexpObjNullProps, listing1)['lng']).to.contain('-0.127758');
    });


});


