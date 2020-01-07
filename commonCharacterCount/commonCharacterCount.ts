// First solution
function commonCharacterCount(s1: string, s2: string): number {
  const str1: Object = countChars(s1);
  const str2: Object = countChars(s2);
  let total: number = 0;

  for (let char in str1) {
    if (str2[char]) {
      total += Math.min(str1[char], str2[char]);
    }
  }
  return total;
}

function countChars(str: string): Object {
  const chars = {};

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  return chars;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('something', 'sitting'));
