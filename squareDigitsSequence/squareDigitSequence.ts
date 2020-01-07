// First solution
function squareDigitsSequence(a0: number): number {
  const sequence: number[] = [a0];
  let lastElement = sumDigits(sequence[sequence.length - 1]);

  while (!sequence.includes(lastElement)) {
    sequence.push(lastElement);
    lastElement = sumDigits(sequence[sequence.length - 1]);
  }

  sequence.push(lastElement);
  return sequence.length;
}

function sumDigits(num: number): number {
  const strNum = num.toString();
  let sum: number = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(parseInt(strNum[i]), 2);
  }
  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
