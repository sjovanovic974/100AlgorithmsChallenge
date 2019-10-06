// First solution
function containsCloseNums(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    let idx = i + k;

    if (idx >= nums.length) {
      return false;
    }

    if (nums[i] === nums[idx]) {
      return true;
    }
  }
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 1, 3, 5, 3, 5], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 1], 4));
