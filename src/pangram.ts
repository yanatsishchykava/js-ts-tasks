/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const input = word.toString().toLowerCase();
  if (isNaN(Number(word))) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    for (const char of input) {
      alphabet.delete(char);
  }
  return alphabet.size === 0;
}
const digits = new Set('0123456789');
  for (const char of input) {
    digits.delete(char);
  }
  return digits.size === 0;
};
