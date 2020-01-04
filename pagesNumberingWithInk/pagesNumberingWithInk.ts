// First solution
function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  let currentLength: number = current.toString().length;
  let nextNumber: number = current + 1;
  const pages: number[] = [];

  while (currentLength <= numberOfDigits) {
    pages.push(current);
    numberOfDigits -= currentLength;
    current = nextNumber;
    currentLength = current.toString().length;
    nextNumber = current + 1;
  }
  return pages.pop();
}

console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
console.log(pagesNumberingWithInk(1, 5));
