//First solution
function minesweeper(matrix) {
  let mineMatrix = [];
  let rowNumbers = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let index = 0; index < matrix.length; index++) {
      let total = countMines(matrix, index, row);
      rowNumbers.push(total);
    }
    mineMatrix.push(rowNumbers);
    rowNumbers = [];
  }
  return mineMatrix;
}

function countMines(matrix, index, row) {
  let fields = [];

  if (index === 0) {
    if (row !== 0) {
      fields.push(matrix[row - 1][0], matrix[row - 1][1]);
    }
    fields.push(matrix[row][1]);
    if (row !== 2) {
      fields.push(matrix[row + 1][0], matrix[row + 1][1]);
    }
  } else if (index === 1) {
    if (row !== 0) {
      fields.push(matrix[row - 1][0], matrix[row - 1][1], matrix[row - 1][2]);
    }
    fields.push(matrix[row][0], matrix[row][2]);
    if (row !== 2) {
      fields.push(matrix[row + 1][0], matrix[row + 1][1], matrix[row + 1][2]);
    }
  } else {
    if (row !== 0) {
      fields.push(matrix[row - 1][1], matrix[row - 1][2]);
    }
    fields.push(matrix[row][1]);
    if (row !== 2) {
      fields.push(matrix[row + 1][1], matrix[row + 1][2]);
    }
  }
  return fields.reduce((acc, el) => (el === true ? acc + 1 : acc + 0));
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);
