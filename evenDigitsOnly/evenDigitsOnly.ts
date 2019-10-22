// First solution
function evenDigitsOnly(n: number): boolean {
  return n
    .toString()
    .split('')
    .every(x => parseInt(x) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
