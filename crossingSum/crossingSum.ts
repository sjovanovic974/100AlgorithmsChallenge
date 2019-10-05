// First solution
function crossingSum(matrix: number[][], a: number, b: number): number {
    let rowSum = matrix[a].reduce( (acc, num) => acc + num);

    let columnSum = 0;
    for(let i = 0; i < matrix.length; i++) {
        columnSum += matrix[i][b];
    }
  
    return rowSum + columnSum - matrix[a][b];
}

console.log(crossingSum([[1, 1, 1, 1], 
                         [2, 2, 2, 2], 
                         [3, 3, 3, 3]], 1, 3));