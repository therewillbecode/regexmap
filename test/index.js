'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;

var index = require('../src/index.js');

var listing1 = fs.readFileSync('./test/fixtures/listing1.txt', "utf8");
var listing2 = fs.readFileSync('./test/fixtures/listing2.txt', "utf8");
const TESTING = true;


describe( 'handles input', function() {
 
    describe( 'when given', function() {
 
        before( function() {
            // executes once, before all tests 

            var t = 7
        } );
 
        beforeEach( function() {
            // executes before each test of the suite
        } );
 
        after( function() {
            // executes once, after all tests
        } );
 
        afterEach( function() {
            // executes after each test of the suite
        } );
 
        it( 'should verify a behavior', function() {
            // a test containing assertions
            t.should.equal(1);
        } );
 
        xit( 'should be a pending test', function() {
            // this test is pending. All assertions inside are ignored.
        } );    
 
        it.skip( 'should also be a pending test', function() {
            // it.skip is a longer, more semantic form of xit
        } );        
 
        it( 'should also be a pending test' );
    } );
 
    describe( 'Another second level test suite', function() {
 
    } );
} );


describe( 'extracts data', function() {
 
    describe( 'Second level test suite', function() {
 
        before( function() {
            // executes once, before all tests 
        } );
 
        beforeEach( function() {
            // executes before each test of the suite
        } );
 
        after( function() {
            // executes once, after all tests
        } );
 
        afterEach( function() {
            // executes after each test of the suite
        } );
 
        it( 'should verify a behavior', function() {
            // a test containing assertions
        } );
 
        xit( 'should be a pending test', function() {
            // this test is pending. All assertions inside are ignored.
        } );    
 
        it.skip( 'should also be a pending test', function() {
            // it.skip is a longer, more semantic form of xit
        } );        
 
        it( 'should also be a pending test' );
    } );
 
    describe( 'Another second level test suite', function() {
 
    } );
} );