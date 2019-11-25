function extractMatrixColumn(matrix: number[][], column: number): number[] {
  const extractedColumn = [];

  for (let i = 0; i < matrix.length; i++) {
    extractedColumn.push(matrix[i][column]);
  }

  return extractedColumn;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);
