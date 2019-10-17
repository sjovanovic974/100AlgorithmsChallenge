// I am not sure if I have understood what was task here...
function boxBlur(image: number[][]): number {
  const arr = image.reduce((acc, el) => acc.concat(el));
  const sum = arr.reduce((acc, num) => (acc += num));
  const length = arr.length;
  return Math.floor(sum / length);
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
