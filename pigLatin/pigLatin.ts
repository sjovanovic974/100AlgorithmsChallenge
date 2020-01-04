// First solution
function pigLatin(str: string): string {
  if (str.match(/^[a|e|i|o|u]/)) {
    return str + 'way';
  }

  const consonantStart = str.match(/^[^a|e|i|o|u]+/)[0];
  const firstVowelIndex = str.match(/[a|e|i|o|u]/).index;
  str = str.slice(firstVowelIndex);
  return str + consonantStart + 'ay';
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));
