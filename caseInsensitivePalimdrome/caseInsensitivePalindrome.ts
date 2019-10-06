// First solution
function isCaseInsensitivePalindrome(inputString: string): boolean {
  inputString = inputString.toLowerCase();
  const reversedString = inputString
    .split('')
    .reverse()
    .join('');

  return inputString === reversedString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
