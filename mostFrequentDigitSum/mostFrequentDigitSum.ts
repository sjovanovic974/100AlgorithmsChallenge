// First solution
function mostFrequentDigitSum(n: number): number {
  const frequency = {};

  while (n > 0) {
    const idx = digitsSum(n);

    if (frequency[idx]) {
      frequency[idx]++;
    } else {
      frequency[idx] = 1;
    }
    n -= idx;
  }

  // return Number(
  //   Object.keys(frequency).reduce((a, b) =>
  //     frequency[a] > frequency[b] ? a : b
  //   )
  // );

  return Number(
    Object.keys(frequency).find(key => {
      let max = 0;
      return frequency[key] > max;
    })
  );
}

function digitsSum(num: number) {
  let sum: number = 0;
  const strNum: string = num.toString();

  for (let i = 0; i < strNum.length; i++) {
    sum += parseInt(strNum[i]);
  }

  return sum;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
