// First solution
function digitDegree(n: number): number {
  const getSum = x => {
    const arr = x.toString().split('');
    return arr.reduce((acc, num) => (acc += parseInt(num)), 0);
  };

  if (n < 10) {
    return 0;
  } else if (getSum(n) < 10) {
    return 1;
  } else {
    let sum = getSum(n);
    let degree = 1;
    while (sum >= 10) {
      sum = getSum(sum);
      degree++;
    }
    return degree;
  }
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
