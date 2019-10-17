// First solution
function confirmEnding(str: string, target: string) {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
