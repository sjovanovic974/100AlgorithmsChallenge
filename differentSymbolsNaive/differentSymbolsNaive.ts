// First solution
function differentSymbolsNaive(s: string): number {
  return new Set(s.split('')).size;
}

console.log(differentSymbolsNaive('cabca'));

// Second solution
// function differentSymbolsNaive(s: string): number {
//   const arr: string[] = [];

//   s.split('').forEach(c => {
//     if(!arr.includes(c)) {
//       arr.push(c);
//     }
//   });
//   return arr.length;
// }
