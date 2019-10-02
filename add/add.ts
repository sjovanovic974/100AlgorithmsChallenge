// Basic add function with two parameters
function add(param1: number, param2: number): number {
  return param1 + param2;
}

console.log(add(1, 2));
console.log(add(3, 2));

// Simple solution to manage unknown number of parameters using rest operator
function add2(...param1: number[]): number {
  return param1.reduce((total, num) => total + num);
}

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

// Older way function's built in arguments object converted to array
function add3(): number {
  const arr = Array.from(arguments);
  return arr.reduce((total, num) => total + num);
}

console.log(add3(1, 2, 3, 4, 5));
console.log(add3(2, 3));
