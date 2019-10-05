// First solution
function arrayPreviousLess(items: number[]): number[] {
  return items.map((num, index) => {
    if(num > items[index - 1]) {
      return items[index - 1];
    } else {
      return -1;
    }
  })
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
// [-1, 3, -1, 2, 4]