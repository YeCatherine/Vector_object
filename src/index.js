/**
 * @function VectorException.
 * @param message
 * The message for exception.
 */
function VectorException (message) {
  this.message = message;
  this.name = "VectorException";
}

/**
 * Creates a new Vector.
 * @class
 */
class Vector {
  constructor(components) {
    this.components = components;
  }

  /**
   * Compares the two array's length.
   * @example <caption>Example usage of errorLogger method.</caption>
   * // for [1, 2, 3] + [2, 3, 4] returns true
   * @param b {object}the array to compare.
   * @returns {boolean} Returns true if the length is the same.
   * @throws Will throw an error if array's length is not equal.
   */
  errorLogger(b) {
    if (this.components.length === b.components.length) {
      return true;
    } else {
      throw new VectorException("not the same length");
    }
  }

  /**
   * Solves addition of the 2 array's elements a[i] + b[i] = c[i]
   * @example <caption>Example usage of add method.</caption>
   * // for [1, 2, 3] + [3, 4, 5] returns [4, 6, 8]
   * Vector.add([3, 4, 5]);
   * @param b {object} The array to add.
   * @returns {object} Returns the new array.
   */
  add(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] + b.components[i]);
      }
      return arr;
    }
  }

  /**
   * Solves subtraction of the 2 array's elements a[i] + b[i] = c[i]
   * @example <caption>Example usage of subtract method.</caption>
   * // for [1, 2, 3] + [3, 4, 5] returns [-2, -2, -2]
   * Vector.subtract([3, 4, 5]);
   * @param b {object} The array to subtract.
   * @returns {object} Returns the new array.
   */
  subtract(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] - b.components[i]);
      }
      return arr;
    }
  }

  /**
   * Solves the sum of the 2 multiplied arrays (a[i] * b[i]) + (a[i+1] * b[i+1]) = c
   * @example <caption>Example usage of dot method.</caption>
   * // for [1, 2, 3] + [3, 4, 5] returns 26
   * Vector.dot([3, 4, 5]);
   * @param b {object} The array to multiply.
   * @returns {number} Returns the sum after the arrays' multiplication.
   */
  dot(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] * b.components[i]);
      }

      const dotSum = arr.reduce(function (acc, val) {
        return acc + val;
      }, 0);
      return dotSum;
    }
  }

  /**
   * Solves the sum of the raised array elements to a power of 2 (a[0] * a[0]) + (a[1] * a[1]) = c
   * @example <caption>Example usage of norm method.</caption>
   * // for [1, 2, 3] returns 14
   * Vector.norm();
   * @returns {number} Returns the sum.
   */
  norm() {
    const doubles = this.components.map(function (num) {
      return num ** 2;
    });
    const doublesSum = doubles.reduce(function (acc, val) {
      return acc + val;
    }, 0);
    return doublesSum;
  }

  /**
   * Solves the cast to string
   * @example <caption>Example usage of toString method.</caption>
   * // for [1, 2, 3] returns '( 123 )'
   * Vector.toString();
   * @returns {string} Returns the string of array's elements.
   */
  toString() {
    return `'( ${this.components.toString()} )'`;
  }

  /**
   * Solves the comparison of the two arrays.
   * @example <caption>Example usage of toString method.</caption>
   * // for [1, 2, 3] vs [3, 4, 5] returns "not the same"
   * Vector.dot([3, 4, 5]);
   * @param b {object} The array to compare.
   * @returns {string} Returns the comparison's result.
   */
  equals(b) {
    if (this.errorLogger(b)) {
      for (let i = 0; i < this.components.length; i++) {
        const result =
          this.components[i] === b.components[i] ? "equal" : "not the same";
        return result;
      }
    }
  }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.toString());
console.log(a.equals(b));
