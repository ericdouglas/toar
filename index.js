'use strict';

module.exports = toar;

function toar( input, splitter ) {
  var array = [];
  var key;
  var type = typeof input;
 
  // Verify if input is an array
  if ( input.constructor === Array ) {
    return input;
  }

  // Verify if input is an object but is falsy (null or undefined)
  if ( type === 'object' && !input ) {
    return [ input ];
  }

  if ( typeof type === 'object' || typeof type === 'string' ) {
    for ( key in input ) {
      array.push( key );
    }
  } else {
    array.push( input );
  }

  return array;
}
