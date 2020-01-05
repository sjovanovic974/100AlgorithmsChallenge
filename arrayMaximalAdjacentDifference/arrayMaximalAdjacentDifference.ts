// First solution
function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let diff = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > diff) {
      diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }

  return diff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 1, 5, 3]));
console.log(arrayMaximalAdjacentDifference([-10, 4, -9, -5]));
