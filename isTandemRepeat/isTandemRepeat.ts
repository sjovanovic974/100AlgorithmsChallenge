// First solution
function isTandemRepeat(inputString: string): boolean {
  if (inputString.length % 2 !== 0) return false;

  const divisionIndex = inputString.length / 2;
  const firstHalf = inputString.slice(0, divisionIndex);
  const secondHalf = inputString.slice(divisionIndex);

  return firstHalf === secondHalf;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
