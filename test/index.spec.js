'use strict';

var expect = require( 'chai' ).expect;
var toar   = require( '../' );

describe( '#toar', function() {

  var tests = [
    {
      description : '',
      argument    : [],
      result      : []
    },
    {
      description : ' with one element "null"',
      argument    : null,
      result      : [ null ]
    },
    {
      description : ' with one element "undefined"',
      argument    : undefined,
      result      : [ undefined ]
    },
    {
      description : ' with three elements from a string',
      argument    : 'javascript nodejs <3',
      splitter    : ' ',
      result      : [ 'javascript', 'nodejs', '<3' ]
    },
    {
      description : ' with 3 keys from an object',
      argument    : { name : 'User', lastName : 'lastName', userId : 'user13' },
      result      : [ 'name', 'lastName', 'userId' ]
    },
    {
      description : ' with a number',
      argument    : 13,
      result      : [ 13 ]
    },
    {
      description : ' with an Infinity',
      argument    : Infinity,
      result      : [ Infinity ]
    },
    {
      description : ' with a NaN',
      argument    : NaN,
      result      : [ NaN ]
    },
  ];

  tests
    .forEach( function( test ) {
    
      it( 'Should return an array' + test.description, function() {
        expect( toar( test.argument, test.splitter )).to.deep.equal( test.result );
      });
    
    });

});
