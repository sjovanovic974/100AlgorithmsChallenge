//First solution (though it took me a while)
function isPrime(value) {
  if (value < 2) return false;

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

function sumAllPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
