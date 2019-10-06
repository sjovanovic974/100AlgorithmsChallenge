// First solution
function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const columnValue = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  const cell1Total = parseInt(cell1[1]) + parseInt(columnValue[cell1[0]]);
  const cell2Total = parseInt(cell2[1]) + parseInt(columnValue[cell2[0]]);

  return (cell1Total + cell2Total) % 2 === 0 ? true : false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

// // First solution
// function chessBoardCellColor(cell1: string, cell2: string): boolean {
//   const x: any[] = cell1.split('');
//   const y: any[] = cell2.split('');

//   const columnValue = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8
//   };

//   const cell1Row = parseInt(x[1]);
//   const cell1Column = parseInt(columnValue[x[0]]);

//   const cell2Row = parseInt(y[1]);
//   const cell2Column = parseInt(columnValue[y[0]]);
//   const total = cell1Row + cell1Column + cell2Row + cell2Column;

//   return total % 2 === 0 ? true : false;
// }

// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));
