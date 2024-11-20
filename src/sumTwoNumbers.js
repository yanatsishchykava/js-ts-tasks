/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber.toString().replace(/\s+/g, '').trim());
  secondNumber = Number(secondNumber.toString().replace(/\s+/g, '').trim());
  return firstNumber + secondNumber;
};
