'use strict';

var expect = require( 'chai' ).expect;
var toar   = require( '../' );

describe( '#toar', function() {

  it( 'Should return an array', function() {
    expect( toar( [] )).to.be.an( 'array' );
  });

});
