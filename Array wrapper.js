//Array wrapper

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

class ArrayWrapper {
    constructor(nums) {
      this.array = nums;
    }
  
    valueOf() {
  
      return this.array.reduce((sum, num) => sum + num, 0);
    }
  
    toString() {
      return `[${this.array.join(',')}]`;
    }
  }