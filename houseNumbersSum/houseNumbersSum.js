// First solution
function houseNumbersSum(inputArray) {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return sum;
    }
    sum += inputArray[i];
  }
  return sum;
}
console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
console.log(houseNumbersSum([3, 1, 4, 3, 5, 1, 5, 0, 2]));
