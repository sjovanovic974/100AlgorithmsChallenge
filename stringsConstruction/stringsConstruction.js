// First solution
function stringsConstruction(a, b) {
  const obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = 0;
  }

  for (let i = 0; i < b.length; i++) {
    if (obj[b[i]] !== undefined) {
      obj[b[i]]++;
    }
  }

  const values = Object.values(obj);
  return Math.min(...values);
}
console.log(stringsConstruction('abc', 'abccba'));
