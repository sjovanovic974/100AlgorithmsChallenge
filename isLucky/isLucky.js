// First solution
function isLucky(n) {
  const numStr = n.toString();
  const divider = numStr.length / 2;
  const firstHalf = numStr.slice(0, divider).split('');
  const secondHalf = numStr.slice(divider).split('');

  const addNum = arr => {
    return arr.reduce((acc, num) => (acc += parseInt(num)), 0);
  };

  const sum1 = addNum(firstHalf);
  const sum2 = addNum(secondHalf);

  return sum1 === sum2;
}
console.log(isLucky(1230));
console.log(isLucky(239017));
