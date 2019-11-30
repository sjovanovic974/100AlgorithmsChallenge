// First solution
function findEmailDomain(address) {
  return address.split('@').pop();
}
console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
