class Vector {
  constructor(components) {
    this.components = components;
  }

  errorLogger(b) {
    if (this.components.length === b.components.length) {
      return true;
    } else {
      console.log("not the same length");
    }
  }

  reduce(value) {
    return value.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  }

  add(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] + b.components[i]);
      }
      return arr;
    }
  }

  subtract(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] - b.components[i]);
      }
      return arr;
    }
  }

  dot(b) {
    if (this.errorLogger(b)) {
      let arr = [];
      for (let i = 0; i < this.components.length; i++) {
        arr.push(this.components[i] * b.components[i]);
      }
      return this.reduce(arr);
    }
  }

  norm() {
    const doubles = this.components.map(function (num) {
      return num ** 2;
    });
    return this.reduce(doubles);
  }

  toString() {
    return `'( ${this.components.toString()} )'`;
  }

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

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var d = new Vector([1, 4, 5]);
console.log(a.add(b)); //	[4, 6, 8])
console.log(a.add(d));
console.log(a.subtract(b)); // [-2,	-2,	-2])
console.log(a.dot(b)); // 1*3	+	2*4	+	3*5	=	26
console.log(a.norm()); // sqrt(1^2	+	2^2	+	3^2) =	sqrt(14)

var c = new Vector([5, 6, 7, 8]);
console.log("diff length", a.add(c));
console.log(a.toString());
console.log(a.equals(b));
