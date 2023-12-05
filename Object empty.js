// Is Object Empty

// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
  
    } else if (typeof obj === 'object' && obj !== null) {
      
      return Object.keys(obj).length === 0;
    } 
    else {
      return true; // obj is neither an array nor an object
    }
  };