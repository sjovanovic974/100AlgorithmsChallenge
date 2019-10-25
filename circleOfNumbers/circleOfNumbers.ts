// First solution
function circleOfNumbers(n: number, firstNumber: number): number {
  if (firstNumber < n / 2) {
    return n / 2 + firstNumber;
  } else {
    return firstNumber - n / 2;
  }
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 4));
console.log(circleOfNumbers(10, 6));
console.log(circleOfNumbers(10, 9));
console.log(circleOfNumbers(10, 0));
console.log(circleOfNumbers(10, 5));
