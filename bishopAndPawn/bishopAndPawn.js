// Second solution
function bishopAndPawn(bishop, pawn) {
  const row = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const bishopColumn = row[bishop[0]];
  const bishopRow = parseInt(bishop[1]);

  const pawnColumn = row[pawn[0]];
  const pawnRow = parseInt(pawn[1]);

  if (bishopColumn + pawnRow === pawnColumn + bishopRow) return true;

  return false;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('d4', 'f6'));
console.log(bishopAndPawn('g4', 'f6'));

//  First solution
// function bishopAndPawn(bishop, pawn) {
//   function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

//   const row = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8
//   };

//   const fieldsRange = [];

//   const bishopColumn = row[bishop[0]];
//   const bishopRow = parseInt(bishop[1]);

//   let leftField = bishopColumn;
//   let rightField = bishopColumn;

//   for (let i = bishopRow; i <= 8; i++, rightField++, leftField--) {
//     if (
//       rightField > 0 &&
//       rightField <= 8 &&
//       rightField !== bishopColumn &&
//       rightField !== bishopRow
//     ) {
//       fieldsRange.push(getKeyByValue(row, rightField) + i);
//     }

//     if (
//       leftField > 0 &&
//       leftField <= 8 &&
//       leftField !== bishopColumn &&
//       leftField !== bishopRow
//     ) {
//       fieldsRange.push(getKeyByValue(row, leftField) + i);
//     }
//   }

//   leftField = bishopColumn;
//   rightField = bishopColumn;

//   for (let i = bishopRow; i >= 1; i--, rightField++, leftField--) {
//     if (
//       rightField > 0 &&
//       rightField <= 8 &&
//       rightField !== bishopColumn &&
//       rightField !== bishopRow
//     ) {
//       fieldsRange.push(getKeyByValue(row, rightField) + i);
//     }

//     if (
//       leftField > 0 &&
//       leftField <= 8 &&
//       leftField != bishopColumn &&
//       leftField !== bishopRow
//     ) {
//       fieldsRange.push(getKeyByValue(row, leftField) + i);
//     }
//   }

//   return fieldsRange.includes(pawn) ? true : false;
// }
