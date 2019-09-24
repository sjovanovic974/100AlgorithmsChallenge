// Solution using sorting and conversion to string to enable
// comparison of values
function areSimilar(a: number[], b: number[]): boolean {
   const sortedA = a.sort((x, y) => x - y);
   const sortedB = b.sort((x, y) => x - y);
   return sortedA.toString() === sortedB.toString();
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([7, 3, 2, 8], [8, 2, 7, 3]));
