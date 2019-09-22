//Simple solution using power of for loops
function arrayChange(inputArray: number[]): number {
  let counter = 0;

  for(let i = 0; i < inputArray.length - 1; i++){
    while(inputArray[i + 1] <= inputArray[i]) {
      inputArray[i + 1]++;
      counter++;
    }
  }
 
  return counter;
}

console.log(arrayChange([1, 1, 1]));