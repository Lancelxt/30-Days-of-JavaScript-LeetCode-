// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. 
// All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
      const results = [];
      let completedCount = 0;
  
      // Helper function to check completion
      const checkCompletion = () => {
        if (completedCount === functions.length) {
          resolve(results);
        }
      };
  
      functions.forEach((func, index) => {
        // Ensure each function returns a Promise
        const promise = func();
  
        if (!(promise instanceof Promise)) {
          reject(new Error(`Function at index ${index} did not return a Promise`));
          return; // Exit the loop if a function does not return a Promise
        }
  
        promise
          .then((result) => {
            results[index] = result;
            completedCount++;
            checkCompletion();
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };