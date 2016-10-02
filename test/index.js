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
let testRegexpObjMultiProp = {
    'city': testRegexp, 
    'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
    'lat': /(?:"lat":)([+-]?(?:\d*\.)?\d+)/
};

let testRegexpObjNullProps = {
    'colour': /bluewhite/,
    'lng': /(?:"lng":)([+-]?(?:\d*\.)?\d+)/,
};


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

    it('return array when sourcetxt is an empty array ', function() {
        expect(getMatch(testRegexp, [] )).to.to.be.an('array');
    });

    it('return array when sourcetxt is an array length 2 ', function() {
        expect(getMatch(/g/, ['g', 'g'] )).to.have.length.of(2);
    });

    it('return array of length 4 sourcetxt is an array length 4 ', function() {
        expect(getMatch(/d/, ['d', 'd', 'd', 'd'] )).to.have.length.of(4);
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

 
describe('should handle single txt source', function() {
    let arrayStr = [' ', ' '];
    let regexp1 = /bluewhite/;

    it('should match values for multiple properties of object', function() {
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['city']).to.contain('London');
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['lat']).to.contain('51.507351');
        expect(mapRegexps(testRegexpObjMultiProp, stringFixture)['lng']).to.contain('-0.127758');
    });

    it('should map non-matched regexps as null', function() {
        expect(mapRegexps(testRegexpObjNullProps, stringFixture)['colour']).to.be.null;
        expect(mapRegexps(testRegexpObjNullProps, stringFixture)['lng']).to.contain('-0.127758');
    });
});

    describe('when sourceTxt arg is an array', function() { 
        it('and is ', function() {
          // console.log( mapRegexps(testRegexpObjMultiProp, stringFixture))
            expect(mapRegexps(testRegexpObjMultiProp, ['j'])['city']).to.have.length.of(1);
            expect(mapRegexps(testRegexpObjMultiProp, ['j'])['lng']).to.have.length.of(1);
            expect(mapRegexps(testRegexpObjMultiProp, ['j'])['lat']).to.have.length.of(1);
        });
     
        it('array length for each nested property', function() {
            expect(mapRegexps(testRegexpObjMultiProp, [' ',' '] )['city']).to.have.length.of(2);
            expect(mapRegexps(testRegexpObjMultiProp, [' ',' '] )['lng']).to.have.length.of(2);
            expect(mapRegexps(testRegexpObjMultiProp, [' ',' '] )['lat']).to.have.length.of(2);
        });

        let arrayStr2 = ['b ', 'b ', ' b', ' b'];

        it('array length for each nested property', function() {
            expect(mapRegexps(testRegexpObjMultiProp, arrayStr2)['city']).to.have.length.of(4);
            expect(mapRegexps(testRegexpObjMultiProp, arrayStr2)['lng']).to.have.length.of(4);
            expect(mapRegexps(testRegexpObjMultiProp, arrayStr2)['lat']).to.have.length.of(4);
        });
    });
});


