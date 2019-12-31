// First solution
function houseOfCats(legs) {
  const result = [];
  const catLegs = 4;
  const humanlegs = 2;

  if (legs % catLegs === humanlegs) {
    result.push(1);
  }

  const range = Math.floor(legs / catLegs);

  for (let i = 1; i <= range; i++) {
    if (result[0] && result.length === 1) {
      result.push(result[0] + humanlegs);
    } else if (result.length === 0) {
      result.push(humanlegs);
    } else {
      result.push(result[result.length - 1] + humanlegs);
    }
  }
  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(18));
