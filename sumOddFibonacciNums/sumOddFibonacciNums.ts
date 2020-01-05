function sumOddFibonacciNums(num: number): number {
  let total = 0;
  let firstNumber: number = 1;
  let secondNumber: number = 1;

  while (secondNumber <= num) {
    if (secondNumber % 2 !== 0) {
      total += secondNumber;
    }
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp + firstNumber;
  }

  return total;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
