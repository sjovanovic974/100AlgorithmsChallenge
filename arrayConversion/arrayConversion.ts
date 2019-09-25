function arrayConversion(inputArray: number[]): number {
  let reducedArr: number[] = [];
  let iteration = 1;
  
  while(inputArray.length !== 1) {
    for(let i = 0; i < inputArray.length; i += 2){
      if(iteration % 2 !== 0) {
        if(i < inputArray.length - 1) {
          reducedArr.push(inputArray[i] + inputArray[i+1]);
        } else {
          reducedArr.push(inputArray[i]);
        }
      } else {
        if(i < inputArray.length - 1) {
          reducedArr.push(inputArray[i] * inputArray[i+1]);
        } else {
          reducedArr.push(inputArray[i]);
        }
      }
    }

    inputArray = [...reducedArr];
    reducedArr = [];
    iteration++;
  }  
  return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 3, 2, 2, 1, 3, 3, 2]));