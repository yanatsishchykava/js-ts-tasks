/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const a = Math.abs(secondPoint.X - firstPoint.X);
  const b = Math.abs(secondPoint.Y - firstPoint.Y);
  const c = Math.sqrt(a ** 2 + b ** 2);
return c.toFixed(2);
};