// Second solution
function shapeArea(n: number): number {
  let total = 1;

  for (let i = 1; i < n; i++) {
    total += i * 4;
  }

  return total;
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));

// First solution
// function shapeArea(n: number): number {
//   if (n < 1) return 0;

//   let result: number = 0;
//   let start: number = 0;
//   let follow: number = 4;

//   for (let i = 1; i < n; i++) {
//     result += start + follow;
//     const temp = start;
//     start = follow;
//     follow = temp + start;
//   }

//   return result + 1;
// }
