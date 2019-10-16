// First solution
function addBorder(picture: string[]): string[] {
  const lineLength: number = picture[0].length + 2;
  const arr: string[] = [];

  for (let i: number = 0; i < picture.length + 2; i++) {
    if (i === 0 || i === picture.length + 1) {
      arr.push('*'.repeat(lineLength));
    } else {
      let line: string = '';
      for (let x: number = 0; x < picture[i - 1].length; x++) {
        if (x === 0) {
          line += '*' + picture[i - 1][x];
        } else if (x === picture[i - 1].length - 1) {
          line += picture[i - 1][x] + '*';
        } else {
          line += picture[i - 1][x];
        }
      }
      arr.push(line);
    }
  }
  return arr;
}

console.log(addBorder(['abc', 'ded']));
