// First solution
function palindromeRearranging(inputString: string): boolean {
  const obj = {};

  if (inputString.length % 2 !== 0) {
    const pivot = Math.floor(inputString.length / 2);
    const array = inputString.split('');
    array.splice(pivot, 1);
    inputString = array.join('');
  }

  for (let i = 0; i < inputString.length; i++) {
    if (obj[inputString[i]]) {
      obj[inputString[i]]++;
    } else {
      obj[inputString[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabcc'));
console.log(palindromeRearranging('abcabc'));
console.log(palindromeRearranging('cabb'));
console.log(palindromeRearranging('abadccb'));
