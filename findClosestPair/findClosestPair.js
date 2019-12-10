/*
 * First solution using a Set and second using an object
 */

// function findClosestPair(numbers, sum) {
//   const numSet = new Set();
//   let minDistance = numbers.length;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numSet.has(numbers[i])) {
//       const distance = i - numbers.indexOf(sum - numbers[i]);
//       if (distance <= minDistance) {
//         minDistance = distance;
//       }
//     }
//     numSet.add(sum - numbers[i]);
//   }

//   return minDistance != numbers.length ? minDistance : -1;
// }

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));

function findClosestPair(numbers, sum) {
  const obj = {};
  let minDistance = numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    if (obj[numbers[i]]) {
      const distance = i - obj[numbers[i]];
      if (distance <= minDistance) {
        minDistance = distance;
      }
    }
    obj[sum - numbers[i]] = i;
  }

  return minDistance != numbers.length ? minDistance : -1;
}
