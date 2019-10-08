// First solution
function candies(n: number, m: number): number {
  const remainder = m % n;
  return m - remainder;
}

console.log(candies(3, 10));
console.log(candies(3, 15));
console.log(candies(3, 8));
