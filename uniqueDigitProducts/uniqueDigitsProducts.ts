// Second solution
function uniqueDigitProducts(a: number[]): number {
  const products: number[] = [];

  for (let num of a) {
    const product: number = digitsProduct(num);
    if (!products.includes(product) {
      products.push(product);
    }
  }

  return products.length;
}

function digitsProduct(num: number): number {
  const strNum = num.toString();
  let product: number = 1;

  for (let i = 0; i < strNum.length; i++) {
    product *= parseInt(strNum[i]);
  }
  return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

// First solution
// function uniqueDigitProducts(a: number[]): number {
//   const products: number[] = [];

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 10) {
//       products.push(a[i]);
//     } else {
//       const stringNumber: String = a[i].toString();
//       let product: number = 1;
//       for (let x = 0; x < stringNumber.length; x++) {
//         product *= parseInt(stringNumber[x]);
//       }
//       products.push(product);
//     }
//   }

//   return new Set(products).size;
// }
