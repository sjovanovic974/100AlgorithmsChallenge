// First solution
function electionsWinners(votes: number[], k: number): number {
  const sortedArr = votes.sort((a, b) => a - b);
  const max = sortedArr[sortedArr.length - 1];
  let count = 0;

  if (k === 0) {
    if (sortedArr[sortedArr.length - 1] === sortedArr[sortedArr.length - 2]) {
      count = 0;
    } else {
      count = 1;
    }
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] + k > max) {
        count++;
      }
    }
  }

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
