// First solution
function allLongestStrings(inputArray: string[]): string[] {
  let longestWord = 0;

  inputArray.forEach(word => word.length >= longestWord ? longestWord = word.length : '');

  return inputArray.filter( word => word.length >= longestWord );
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["start", "end", "left", "right", "down"]));