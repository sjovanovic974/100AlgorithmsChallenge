// First solution
function fermactor(n) {
  for (let i = 1; i < n / 2; i++) {
    for (let j = 1; j < n / 2; j++) {
      const total = Math.pow(i, 2) - Math.pow(j, 2);

      if (total === n) return [i, j];
    }
  }
}
console.log(fermactor(15));
console.log(fermactor(28));
console.log(fermactor(33));
console.log(fermactor(44));
console.log(fermactor(14));
