// Allow one function call
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    let result;
  
    return function() {
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        result = fn.apply(this, arguments);
        return result;
      } else {
        return undefined;
      }
    };
  };