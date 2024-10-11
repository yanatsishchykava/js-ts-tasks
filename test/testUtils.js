module.exports.TestUtils = {
  isPalindrome: function () {
    if (typeof this.str !== 'string') {
      throw new Error(`Cannot find variable "str" in a provided context ${JSON.stringify(this)}`);
    }

    if (typeof this.str === 'string' && this.str.length === 0) {
      return true;
    }

    return this.str.split('').reverse().join('') === this.str;
  },

  sumAllObjectProperties: function () {
    let sum = 0;

    for (let key in this) {
      sum += Number(this[key]);
    }

    return sum;
  },

  sortComparator: function (a, b) {
    // two numbers
    if (typeof a === 'number' && typeof b === 'number') {
      return b - a;
    }

    // two strings
    if (typeof a === 'string' && typeof b === 'string') {
      return b.localeCompare(a);
    }

    // don't really care about other data types
    return a.toString() < b.toString() ? -1 : a.toString() > b.toString() ? 1 : 0;
  },
};
