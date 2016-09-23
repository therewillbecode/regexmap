'use strict';

let fs = require("fs");
let chai = require("chai");
let expect = require("chai").expect;

let index = require("../src/index.js");
let stringFixture = fs.readFileSync("./test/fixtures/listing1.txt", "utf8");
let testRegexp = /(?:","truncated_localized_city":")([\w ]+)/


describe('validateRegexObj', function() {
    it('should throw TypeError if arg 1 is not an obj ', function() {
        expect(function(){
        index.validateRegexObj(undefined);
    }).to.throw(TypeError);

        expect(function(){
        index.validateRegexObj(6);
    }).to.throw(TypeError);

        expect(function(){
        index.validateRegexObj('name');
    }).to.throw(TypeError);
    });

    it('should throw TypeError if obj does not have regex property values', function() {
          expect(function(){
        index.validateRegexObj({'name': 6});
    }).to.throw(TypeError);
    }); 

    let validObj = { 'name': /alexa/, 'age': /\d{2}/ };

    it('should not throw TypeError if obj has valid regex property values', function() {
        expect(function(){
        index.validateRegexObj(validObj);
    }).to.not.throw(TypeError);
    });
});


describe('get match', function() {
    it('should return an array', function() {
        expect(index.getMatch(testRegexp, stringFixture)).to.be.an('array');
    });

    it('array should contain regex match', function() {
        expect(index.getMatch(testRegexp, stringFixture)).to.contain('London');
    });

    it('should return null if no match', function() {
        expect(index.getMatch(testRegexp, 'testString')).to.be.a('null');
    });
});


describe('mapRegexps', function() {
    let testRegexpObj = {'city': testRegexp}

    it('should return an object', function() {
        expect(index.mapRegexps(testRegexpObj, stringFixture)).to.be.an('object');
    });

    it('should return an object with original property key', function() {
        expect(index.mapRegexps(testRegexpObj, stringFixture)).hasOwnProperty('city');
    });

    it('should return an object with matched value', function() {
        expect(index.mapRegexps(testRegexpObj, stringFixture)['city']).to.contain('London');
    });

     let testRegexpObjMultiProp = {
        'city': testRegexp, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should match values for multiple properties of object', function() {
        expect(index.mapRegexps(testRegexpObjMultiProp, stringFixture)['city']).to.contain('London');
        expect(index.mapRegexps(testRegexpObjMultiProp, stringFixture)['lat']).to.contain('51.507351');
        expect(index.mapRegexps(testRegexpObjMultiProp, stringFixture)['lng']).to.contain('-0.127758');
    });

    let testRegexpObjNullProps = {
        'colour': /bluewhite/,
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
    };

    it('should map non-matched regexps as null', function() {
        expect(index.mapRegexps(testRegexpObjNullProps, stringFixture)['colour']).to.be.null;
        expect(index.mapRegexps(testRegexpObjNullProps, stringFixture)['lng']).to.contain('-0.127758');
    });
});


