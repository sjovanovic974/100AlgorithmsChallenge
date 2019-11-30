function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let day = 0;
  let currentHeight = 0;

  while (currentHeight !== desiredHeight) {
    currentHeight += upSpeed;
    currentHeight -= downSpeed;
    day++;
  }
  return day;
}

console.log(growingPlant(100, 10, 910));
