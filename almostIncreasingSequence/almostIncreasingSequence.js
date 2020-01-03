// First solution (it took me a while). It is a brute force solution, N^2 as I can see,
// but couldn't do better at this point
function almostIncreasingSequence(sequence) {
  for (let i = sequence.length - 1; i >= 0; i--) {
    const answers = [];
    const newSequence = [...sequence];
    newSequence.splice(i, 1);
    for (let x = 0; x < newSequence.length - 1; x++) {
      if (newSequence[x] < newSequence[x + 1]) {
        answers.push(true);
      } else {
        answers.push(false);
      }
    }
    if (answers.every(el => el === true)) return true;
  }

  return false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 1, 2]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 2, 3, 4]));
console.log(almostIncreasingSequence([5, 8, 6, 7]));
console.log(almostIncreasingSequence([1, 3, 1, 4]));
console.log(almostIncreasingSequence([5, 6, 7, 4]));
