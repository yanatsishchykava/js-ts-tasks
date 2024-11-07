/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  if (start > end) {
    [start, end] = [end, start]; // Если start больше end, меняем их местами
  }
  let number = end - start + 1; 
  let result = (number * (start + end)) / 2;
    return result;
};
