// My solution to the problem using "for loop" and "reduce()"
function flattenArray(arr: any[]): any[] {

  for(let i = 0; i < arr.length; i++){
    while(Array.isArray(arr[i])){
      arr = arr.reduce((acc, element) => {
        return acc.concat(element);
      }, []);
    }
  }

  return arr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
console.log(flattenArray([1, [4, [2, 5]]]));
