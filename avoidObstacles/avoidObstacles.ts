// First solution
function avoidObstacles(inputArray: number[]): number {
  const arr = inputArray.sort((a, b) => a - b);
  
  let leap = 0;
  let i = 2; // minimum sequence value to be able to jump over an element
 
    while(true) {
      if(arr.every(num => !(num % i === 0))) {
        leap = i;
        break;
      }
      i++;
    }

  return leap;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([10, 2, 8, 4, 6]));
console.log(avoidObstacles([12, 4, 8, 9, 3, 1, 13]));