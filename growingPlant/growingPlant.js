// First solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let currentHeight = 0;
  while (currentHeight < desiredHeight) {
    day++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) {
      return day;
    }
    currentHeight -= downSpeed;
  }
  return day;
}
console.log(growingPlant(100, 10, 910));
