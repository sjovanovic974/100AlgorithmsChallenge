//Simple solution to check for palindromes
function checkPalindrome(inputString: string): boolean {
  return inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase();
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

/*
//old school solution
function checkPalindrome(inputString: string): boolean {
  inputString = inputString.toLowerCase();
  let a = 0, b = inputString.length -1;
  while(a < b){
    if(inputString[a] !== inputString[b]){
      return false;
    }
    a++;
    b--;
  }
  return true;
}
*/
