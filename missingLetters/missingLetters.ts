// First solution
function missingLetters(str: string): string {
  const abcd: string = 'abcdefghijklmnopqrstuvwxyz';
  let start = abcd.indexOf(str[0]);

  for (let i: number = 0; i < str.length; i++, start++) {
    if (abcd[start] !== str[i]) {
      return abcd[start];
    }
  }
}

console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
console.log(missingLetters('degh'));
