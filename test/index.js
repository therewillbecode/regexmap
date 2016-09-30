"use strict";

let fs = require("fs");
let chai = require("chai");
let expect = require("chai").expect;
let rewire = require("rewire");
let index = rewire("../src/index.js");

// import public functions from index.js
let mapRegexps = require("../src/index.js");

// import private functions from index.js
let validateRegexObj = index.__get__("validateRegexObj");
let getMatch = index.__get__("getMatch"); 

let stringFixture = fs.readFileSync("./test/fixtures/listing1.txt", "utf8");
let testRegexp = /(?:","truncated_localized_city":")([\w ]+)/


describe('validateRegexObj', function() {
    it('should throw TypeError if arg 1 is not an obj ', function() {
        expect(function(){
        validateRegexObj(undefined);
    }).to.throw(TypeError);

        expect(function(){
        validateRegexObj(6);
    }).to.throw(TypeError);

        expect(function(){
        validateRegexObj('name');
    }).to.throw(TypeError);
    });

    it('should throw TypeError if obj does not have regex property values', function() {
          expect(function(){
        validateRegexObj({'name': 6});
    }).to.throw(TypeError);
    }); 

    let validObj = { 'name': /alexa/, 'age': /\d{2}/ };

    it('should not throw TypeError if obj has valid regex property values', function() {
        expect(function(){
        validateRegexObj(validObj);
    }).to.not.throw(TypeError);
    });
});


describe('get match', function() {
    it('should return an array', function() {
        expect(getMatch(testRegexp, stringFixture)).to.be.an('array');
    });

    it('array should contain regex match', function() {
        expect(getMatch(testRegexp, stringFixture)).to.contain('London');
    });

    it('should return null if no match', function() {
        expect(getMatch(testRegexp, 'testString')).to.be.a('null');
    });
});


describe('replace', function() {
    it('should return an object', function() {

    });

    it('object should contain regexp', function() {
   
    });

     it('object should contain replaced string', function() {
   
    });

    it('object should contain original string', function() {
 
    });


    it('return string should equal original source string if no replacements for given string is zero', function() {

    });

});


describe('replace counts matches', function() {
    it('match count for given property', function() {
        .should.equal(0);
    });

    it('match count for given property', function() {
        .should.equal(2);

    });


    it('should calculate correct number of matches for multiple regexps', function() {
        property.should.equal(2);
        property.should.equal(3);
        property.should.equal(0);

    });

    

    it('return string should equal original source string if no replacements for given string is zero', function() {
        expect(getMatch(testRegexp, 'testString')).to.be.a('null');
    });

    it('should return a property count for number of replacements for regexp', function() {
        expect(getMatch(testRegexp, 'testString')).to.be.a('null');
    });
});



describe('mapRegexps', function() {
    let testRegexpObj = {'city': testRegexp}

    it('should return an object', function() {
        expect(mapRegexps(testRegexpObj, stringFixture)).to.be.an('object');
    });

    it('should return an object with original property key', function() {
        expect(mapRegexps(testRegexpObj, stringFixture)).hasOwnProperty('city');
    });

    it('should return an object with matched value', function() {
        expect(mapRegexps(testRegexpObj, stringFixture)['city']).to.contain('London');
    });

     let testRegexpObjMultiProp = {
        'city': testRegexp, 
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
        'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
    };

    it('should match values for multiple properties of object', function() {
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['city']).to.contain('London');
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['lat']).to.contain('51.507351');
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['lng']).to.contain('-0.127758');
    });

    let testRegexpObjNullProps = {
        'colour': /bluewhite/,
        'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
    };

    it('should map non-matched regexps as null', function() {
        expect(mapRegexps(testRegexpObjNullProps, stringFixture)['colour']).to.be.null;
        expect(mapRegexps(testRegexpObjNullProps, stringFixture)['lng']).to.contain('-0.127758');
    });
});


