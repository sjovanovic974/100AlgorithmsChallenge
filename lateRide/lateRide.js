// Two solutions for the task
function lateRide(n) {
  const hours = Math.floor(n / 60).toString();
  const minutes = (n % 60).toString();

  const time = hours.concat(minutes);

  return time.split('').reduce((acc, num) => parseInt(acc) + parseInt(num), 0);
}

console.log(lateRide(240));
console.log(lateRide(808));

// function lateRide(n) {
//   const hours = Math.floor(n / 60).toString();
//   const minutes = (n % 60).toString();

//   const time = hours.concat(minutes);
//   let result = 0;

//   for (let i of time) {
//     result += parseInt(i);
//   }
//   return result;
// }
