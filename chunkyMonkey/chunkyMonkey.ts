// Found this to be the most concise solution I could have thought of
function chunkyMonkey(arr: any[], size: number): any[][] {
  const tempArr: any[] = [];
  
  while (arr.length) {
    tempArr.push(arr.splice(0, size));
  }

  return tempArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

// First solution: Using slice() to cut an array into desired number of subarrays 
// function chunkyMonkey(arr: any[], size: number): any[][] {
//   const tempArr: any[] = [];

//   for(let i: number = 0; i < arr.length; i+= size) {
//     tempArr.push(arr.slice(i, i + size));
//   }
//   return tempArr;
// }


// Variation of the above solution with while loop
// function chunkyMonkey(arr: any[], size: number): any[][] {
//   const tempArr: any[] = [];
//   let count = 0;

//   while (count < arr.length) {
//     tempArr.push(arr.slice(count, count += size));
//   }
//   return tempArr;
// }