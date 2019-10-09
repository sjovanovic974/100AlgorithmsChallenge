// First solution
function firstDigit(inputString: string): string {
  return inputString.match(/\d/g)[0];
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
