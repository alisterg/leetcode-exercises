/**
 * Calculate fib with memoisation
 * @param {number} N
 * @return {number}
 */

let cache = {};

const fib = function(N) {

    if (cache.hasOwnProperty(N)) {
        return cache[N];
    }
    
    let result;

    if (N < 2) {
      result = N;
    } else {
      result = fib(N-1) + fib(N-2);
    }

    cache[N] = result;

    return result;
};