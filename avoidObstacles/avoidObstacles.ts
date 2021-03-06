// Optimized version of the first solution
function avoidObstacles(inputArray: number[]): number {
  let leap: number = 2; // minimum value to be able to jump over an element

  while (true) {
    if (inputArray.every(num => num % leap !== 0)) {
      return leap;
    }
    leap++;
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([10, 2, 8, 4, 6]));
console.log(avoidObstacles([12]));
console.log(avoidObstacles([1, 2, 3, 4, 5, 6, 7]));
