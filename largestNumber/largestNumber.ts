// old school solution
// function largestNumber(n: number): number {
//   let output = '';

//   for(let i = 0; i < n; i++) {
//     output += '9';
//   }

//   return parseInt(output);
// }

// console.log(largestNumber(2));

// simpler solution, one line solution
function largestNumber(n: number): number {
  return parseInt('9'.repeat(n));
}

console.log(largestNumber(2));