// First solution
function compareIntegers(a: string, b: string): string {
  const x = parseInt(a);
  const y = parseInt(b);
  return x > y ? 'greater' : x < y ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
