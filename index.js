'use strict';

module.exports = toar;

/*
 * Convert any type/input to an array
 *
 * @param {Mix}    - input: to be formated
 * @param {String} - splitter: used only when an input is a String
 * @return {Array}
 *
 */

function toar() {
  var array     = [];
  var input     = arguments[ 0 ];
  var type      = typeof arguments[ 0 ];
  var splitter  = arguments[ 1 ];
  var key;
 
  // Verify if input is an object but is falsy (null or undefined)
  if ( type === 'object' && !input ) {
    return [ input ];
  }

  // Verify if input is an array
  if ( input.constructor === Array ) {
    return input;
  }

  // Verify if input is a string
  if ( typeof type === 'string' ) {
    return input.split( splitter ); 
  }

  if ( typeof type === 'object' ) {
    for ( key in input ) {
      if ( input.hasOwnProperty( key )) {
        array.push( key );
      }
    }
  } else {
    array.push( input );
  }

  return array;
}
