// First solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let currentHeight = 0;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    day++;
    if (currentHeight >= desiredHeight) {
      return day;
    }
    currentHeight -= downSpeed;
  }
}
console.log(growingPlant(100, 10, 910));
