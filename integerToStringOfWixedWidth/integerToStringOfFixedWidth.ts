// First solution
function integerToStringOfFixedWidth(number: number, width: number): string {
  const strNum = number.toString();

  if (width <= strNum.length) {
    return strNum.substr(strNum.length - width);
  }

  const numZeros = width - strNum.length;
  return strNum.padStart(width, '0');
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
