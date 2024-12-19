/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise ((resolve, reject) => {
    let results = [];
  for (let i = 0; i < promisesArray.length; i ++) {
promisesArray[i]
.then(result => {
  results[i] = result;
  if(i === promisesArray.length - 1) {
    resolve(results);
  }
})
      .catch(error => reject(error));
      }
  });
};
