/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {

  if (from === to) return parseFloat(value.toFixed(2));

  switch (`${from}-${to}`) {
    case 'C-K': return parseFloat((value + 273.15).toFixed(2));
    case 'K-C': return parseFloat((value - 273.15).toFixed(2));
    case 'gr-pound': return parseFloat((value * 0.00220462).toFixed(2));
    case 'pound-gr': return parseFloat((value * 453.592).toFixed(2));
    case 'm-mi': return parseFloat((value / 1609.344).toFixed(2));
    case 'mi-m': return parseFloat((value * 1609.344).toFixed(2));
    default: throw new Error('Error: the conversion cannot be performed.');
  }
};
