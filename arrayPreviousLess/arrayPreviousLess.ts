// Second optimized solution using ternary operator
function arrayPreviousLess(items: number[]): number[] {
  return items.map((num, index) =>
    num > items[index - 1] ? items[index - 1] : -1
  );
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
// [-1, 3, -1, 2, 4]
