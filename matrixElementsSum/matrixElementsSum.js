// First solution
function matrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        if (i > 0 && matrix[i - 1][j] === 0) {
          continue;
        }
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ])
);
