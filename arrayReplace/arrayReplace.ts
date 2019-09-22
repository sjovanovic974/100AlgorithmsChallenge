// My solution using map()
function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  const output = inputArray.map(num => {
     if(num === elemToReplace) {
      return substitutionElem;
     } else {
      return num;
     }
  });
  return output;
}

console.log(arrayReplace([1, 2, 1], 1, 3));