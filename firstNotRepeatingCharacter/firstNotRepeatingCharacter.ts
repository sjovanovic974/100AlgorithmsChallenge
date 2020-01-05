// Second solution
function firstNotRepeatingCharacter(s: string): string {
  const passedChars = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) === -1 && !passedChars.includes(s[i])) {
      return s[i];
    }
    passedChars.push(s[i]);
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

// function firstNotRepeatingCharacter(s: string): string {
//   const charSet = {};

//   for (let char of s) {
//     if (charSet[char]) {
//       charSet[char]++;
//     } else {
//       charSet[char] = 1;
//     }
//   }

//   for (let ch in charSet) {
//     if (charSet[ch] === 1) return ch;
//   }

//   return '_';
// }
