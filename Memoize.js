// Memoize

// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = args.toString();
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

let callCount = 0;

const memoizedSum = memoize((a, b) => {
    callCount += 1;
    return a + b;
});

const memoizedFib = memoize(n => {
    callCount += 1;
    return n <= 1 ? 1 : memoizedFib(n - 1) + memoizedFib(n - 2);
});

const memoizedFactorial = memoize(n => {
    callCount += 1;
    return n <= 1 ? 1 : memoizedFactorial(n - 1) * n;
});
