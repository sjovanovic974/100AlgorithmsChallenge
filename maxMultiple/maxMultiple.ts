// My solution
// function maxMultiple(divisor: number, bound: number): number {
//   let n = bound;

//   while (n > 0) {
//     if (n % divisor === 0) {
//       return n;
//     }
//     n--;
//   }
//   return -1;
// }

console.log(maxMultiple(3, 10));

// Dylans solution
function maxMultiple(divisor: number, bound: number): number {
  let remainder = bound % divisor;
  return bound - remainder;
}
