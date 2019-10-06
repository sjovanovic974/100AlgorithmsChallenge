// My solution of the problem using String methodes
function alphabeticShift(inputString: string): string {
  return inputString
    .split('')
    .map(l => {
      if (l === 'z') {
        return 'a';
      } else if (l === 'Z') {
        return 'A';
      } else {
        return String.fromCharCode(l.charCodeAt(0) + 1);
      }
    })
    .join('');
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('AAZZZ'));
