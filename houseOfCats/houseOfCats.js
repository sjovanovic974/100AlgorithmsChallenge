// Second solution
function houseOfCats(legs) {
  const result = [];

  if (legs % 4 === 2) {
    result.push(1);
    legs -= 2;
  }

  while (legs > 0) {
    const previousNumber = result[result.length - 1] || 0;
    result.push(previousNumber + 2);
    legs -= 4;
  }
  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(18));
console.log(houseOfCats(8));

// First solution
// function houseOfCats(legs) {
//   const result = [];
//   const catLegs = 4;
//   const humanlegs = 2;

//   if (legs % catLegs === humanlegs) {
//     result.push(1);
//   }

//   const range = Math.floor(legs / catLegs);

//   for (let i = 1; i <= range; i++) {
//     if (result.length === 1) {
//       result.push(result[0] + humanlegs);
//     } else if (result.length === 0) {
//       result.push(humanlegs);
//     } else {
//       result.push(result[result.length - 1] + humanlegs);
//     }
//   }
//   return result;
// }
