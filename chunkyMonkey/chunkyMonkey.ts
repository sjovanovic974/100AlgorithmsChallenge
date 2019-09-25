// Using slice() to cut an array into desired number of subarrays 
// function chunkyMonkey(arr: any[], size: number): any[][] {
//   const tempArr: any[] = [];

//   for(let i: number = 0; i < arr.length; i+= size) {
//     tempArr.push(arr.slice(i, i + size));
//   }
//   return tempArr;
// }

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

function chunkyMonkey(arr: any[], size: number): any[][] {
  const tempArr: any[] = [];
  let count = 0;

  while (count < arr.length) {
    tempArr.push(arr.slice(count, count += size));
  }
  return tempArr;
}