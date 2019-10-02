// First solution
function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maximum = 0;
  let i = 0;

  while (i + k <= inputArray.length) {
    const slice = inputArray.slice(i, k + i);

    const sum = slice.reduce((acc, num) => (acc += num));

    if (sum >= maximum) maximum = sum;

    i++;
  }
  return maximum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
