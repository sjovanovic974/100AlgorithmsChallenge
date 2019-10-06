// Second solution
function convertString(s: string, t: string): boolean {
  let word = '';
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      word += s[i];
      tIndex++;
    }

    if (word === t) {
      return true;
    }
  }
  return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

// First solution
// function convertString(s: string, t: string): boolean {
//   const sArray = s.split('');

//   // Removing unmatching characters
//   let filtered = sArray.filter(c => {
//     return t.includes(c);
//   });

//   // Looping to find multiple occurences
//   for (let i = 0; i < t.length; i++) {
//     const hits = [];

//     let idx = filtered.indexOf(t[i]);
//     while (idx != -1) {
//       hits.push(idx);
//       idx = filtered.indexOf(t[i], idx + 1);
//     }

//     // Removing the first occurence
//     if (hits.length > 1) {
//       filtered.splice(hits[0], 1);
//     }
//   }

//   return filtered.join('') === t;
// }
