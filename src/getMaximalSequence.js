/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) {
    return [];
  }
  let longestSequence = [];
  let currentSequence = [];
for (let i = 0; i < arr.length; i++) {
  if (currentSequence.length === 0 || arr[i] === currentSequence[0]) {
    currentSequence.push(arr[i]);
  } else {
    if (currentSequence.length > longestSequence.length) {
       longestSequence = [...currentSequence];
    }
    currentSequence = [arr[i]];
  }
}
if (currentSequence.length > longestSequence.length) {
  longestSequence = [...currentSequence];
}
return longestSequence;
};
