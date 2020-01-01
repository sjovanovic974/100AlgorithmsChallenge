// First solution
function minimalNumberOfCoins(coins: number[], price: number): number {
  let numberOfCoins = 0;

  for (let i = coins.length - 1; i > 0; i--) {
    const res = Math.floor(price / coins[i]);
    price %= coins[i];
    numberOfCoins += res;
  }

  return numberOfCoins;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
