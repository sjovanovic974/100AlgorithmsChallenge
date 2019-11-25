//Second solution
function sumOfTwo(a, b, v) {
  const aSet = new Set(a);
  for (let i = 0; i < b.length; i++) {
    let match = v - b[i];
    if (aSet.has(match)) {
      return true;
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
//O(n)

/**********************************************************
First solution
function sumOfTwo(a, b, v) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }
  return false;
}
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
O(n^2) <= O(a * b)
************************************************************/
