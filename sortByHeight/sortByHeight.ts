// First solution
function sortByHeight(a: number[]): number[] {
  let b: number[] = [...a];
  b.sort((x, y) => x - y);
  b = b.filter(num => num !== -1);
  let i = 0;

  return a.map(num => {
    return num === -1 ? num : b[i++];
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
