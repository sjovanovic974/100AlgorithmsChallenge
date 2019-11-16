// First solution
function fancyRide(l: number, fares: number[]): string {
  const cars: string[] = [
    'UberX',
    'UberXL',
    'UberPlus',
    'UberBlack',
    'UberSUV'
  ];
  const money = 20;

  for (let i: number = fares.length - 1; i >= 0; i--) {
    let price = fares[i] * l;

    if (price <= money) {
      return cars[i];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
