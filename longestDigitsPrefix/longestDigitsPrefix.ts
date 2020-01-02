// Second solution
function longestDigitsPrefix(inputString: string): string {
  const result = inputString.match(/^\d+/);
  return result ? result[0] : undefined;
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('a123aa1'));

// First solution
//function longestDigitsPrefix(inputString: string): string {
//   let prefix = '';
//   for (let char of inputString) {
//     if (isNaN(parseInt(char))) {
//       return prefix;
//     }
//     prefix += char;
//   }
//   return prefix;
// }
