// First solution
function makeArrayConsecutive2(statues) {
  const minimum = Math.min(...statues);
  const maximum = Math.max(...statues);
  let count = 0;
  for (let i = minimum; i <= maximum; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([7, 2, 3, 6, 8]));
