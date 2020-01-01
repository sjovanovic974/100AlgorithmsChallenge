// First solution
function reflectString(inputString: string): string {
  const dictionary = {};
  const start = 97;
  const end = 122;
  let output = '';

  for (let i = start, x = 0; i <= end; i++, x++) {
    dictionary[String.fromCharCode(i)] = String.fromCharCode(end - x);
  }

  inputString = inputString.toLowerCase();

  for (let char of inputString) {
    output += dictionary[char];
  }

  return output;
}

console.log(reflectString('name'));

//97-122
