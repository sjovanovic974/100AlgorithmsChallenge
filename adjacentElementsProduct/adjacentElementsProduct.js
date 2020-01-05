// First solution
function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i += 2) {
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-3, 6, -2, -5, -7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7]));
