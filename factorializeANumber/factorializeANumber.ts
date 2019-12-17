// First solution
// function factorializeANumber(num: number): number {
//   if (num < 2) return num;

//   let output = 1;
//   for (let i = 1; i <= num; i++) {
//     output *= i;
//   }
//   return output;
// }

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

// Second solution
function factorializeANumber(num: number): number {
  if (num < 2) return num;

  return num * factorializeANumber(num - 1);
}
