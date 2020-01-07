// First solution
function uniqueDigitProducts(a: number[]): number {
  const products: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 10) {
      products.push(a[i]);
    } else {
      const stringNumber: String = a[i].toString();
      let product: number = 1;
      for (let x = 0; x < stringNumber.length; x++) {
        product *= parseInt(stringNumber[x]);
      }
      products.push(product);
    }
  }

  return new Set(products).size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
