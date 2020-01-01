// First solution
function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter(num => num % 3 !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
