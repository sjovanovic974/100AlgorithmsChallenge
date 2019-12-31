// Second solution
function stolenLunch(note) {
  const matrix = {
    a: '0',
    b: '1',
    c: '2',
    d: '3',
    e: '4',
    f: '5',
    g: '6',
    h: '7',
    i: '8',
    j: '9',
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j'
  };

  let output = '';

  for (let char of note) {
    matrix[char] ? (output += matrix[char]) : (output += char);
  }

  return output;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

// First solution
// function stolenLunch(note) {
//   const matrix = {
//     a: '0',
//     b: '1',
//     c: '2',
//     d: '3',
//     e: '4',
//     f: '5',
//     g: '6',
//     h: '7',
//     i: '8',
//     j: '9',
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 'd',
//     4: 'e',
//     5: 'f',
//     6: 'g',
//     7: 'h',
//     8: 'i',
//     9: 'j'
//   };

//   let output = '';

//   for (let i = 0; i < note.length; i++) {
//     if (matrix[note[i]]) {
//       output += matrix[note[i]];
//     } else {
//       output += note[i];
//     }
//   }

//   return output;
// }
