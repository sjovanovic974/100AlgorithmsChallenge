// First solution
function absoluteValuesSumMinimization(a: number[]): number {
  let min = a.reduce((sum, num) => sum + num);
  let index = -1;

  for (let i = 0; i < a.length; i++) {
    let result = 0;
    for (let x = 0; x < a.length; x++) {
      result += Math.abs(a[i] - a[x]);
    }
    if (result < min) {
      min = result;
      index = a[i];
    }
  }
  return index;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
