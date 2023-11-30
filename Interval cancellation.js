// Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
//The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.


var cancellable = function(fn, args, t) {
    fn(...args);
    let intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
};
