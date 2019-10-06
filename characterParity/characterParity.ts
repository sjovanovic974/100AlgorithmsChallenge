// First solution
// function characterParity(symbol: string): string {
//    if(isNaN(parseInt(symbol[0]))) return "not a digit"
//    else if (parseInt(symbol[0]) % 2 === 0) return "even"
//    else return "odd"
// }

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

// Second solution which is more concise
function characterParity(symbol: string): string {
  const num: any = parseInt(symbol);

  return isNaN(num) ? 'not a digit' : num % 2 === 0 ? 'even' : 'odd';
}
