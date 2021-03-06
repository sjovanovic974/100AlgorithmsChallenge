// Second solution
function newNumeralSystem(number: string): string[] {
  let output: string[] = [];
  let start: number = 'A'.charCodeAt(0);
  let range: number = number.charCodeAt(0);

  while (start <= range) {
    output.push(
      `${String.fromCharCode(start)} + ${String.fromCharCode(range)}`
    );
    start++;
    range--;
  }
  return output;
}

console.log(newNumeralSystem('G'));
// ["A + G", "B + F", "C + E", "D + D"]

// First solution
// const numbers = {
//   0: 'A',
//   1: 'B',
//   2: 'C',
//   3: 'D',
//   4: 'E',
//   5: 'F',
//   6: 'G',
//   7: 'H',
//   8: 'I',
//   9: 'J'
// };

// function newNumeralSystem(number: string): string[] {
//   let output: string[] = [];
//   const range = translateToNumber(number);
//   let i = 0;
//   let x = range;
//   while (i <= x) {
//     output.push(`${numbers[i]} + ${numbers[x]}`);
//     i++;
//     x--;
//   }

//   return output;
// }

// function translateToNumber(num: string): number {
//   for (let i in numbers) {
//     if (numbers[i] === num) {
//       return parseInt(i);
//     }
//   }
// }
