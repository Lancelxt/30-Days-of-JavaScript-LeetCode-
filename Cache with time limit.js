// Cache with time limit

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. 
// Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.

class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const expirationTime = Date.now() + duration;
  
      if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        entry.value = value;
        entry.expirationTime = expirationTime;
        return true;
      } else {
        this.cache.set(key, { value, expirationTime });
        return false;
      }
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expirationTime >= Date.now()) {
          return entry.value;
        } else {
          this.cache.delete(key);
        }
      }
      return -1;
    }
  
    count() {
      const currentTime = Date.now();
      let count = 0;
      for (const [key, entry] of this.cache) {
        if (entry.expirationTime >= currentTime) {
          count++;
        } else {
          this.cache.delete(key);
        }
      }
      return count;
    }
  }
  
  