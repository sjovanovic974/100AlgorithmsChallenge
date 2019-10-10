// First solution
function composeRanges(nums: number[]): string[] {
  const arr: string[] = [];
  let count: number = 0;
  let line: string = '';
  for (let i: number = 0, x: number = 1; i < nums.length; i++, x++) {
    if (nums[i] + 1 !== nums[x]) {
      line += '' + nums[i];
      arr.push(line);
      count = 0;
      line = '';
    } else {
      if (nums[i] + 1 === nums[x] && count === 0) {
        line += nums[i] + '->';
        count++;
      }
    }
  }
  return arr;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
