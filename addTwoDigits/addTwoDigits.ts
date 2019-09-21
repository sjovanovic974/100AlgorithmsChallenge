function addTwoDigits(n: string|number): number {
  return n.toString()
          .split('')
          .reduce((acc, num) => parseInt(acc) + parseInt(num));
}

console.log(addTwoDigits(29));

// // Old School solution
// function addTwoDigits(n: string|number): number {
//   const numArr:string[] = n.toString().split('');

//   let total:number = 0;

//   for(let i = 0; i < numArr.length; i++){
//     total += parseInt(numArr[i]);
//   }

//   return total;
// }

// console.log(addTwoDigits(12));