/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber.toString().trim());  
  secondNumber = Number(secondNumber.toString().trim());

  return firstNumber + secondNumber;
};

