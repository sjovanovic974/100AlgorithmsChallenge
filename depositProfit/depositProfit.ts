// First solution
function depositProfit(deposit: number, rate: number, threshold: number): number {
 let years: number = 0;

 while(deposit < threshold) {
    deposit += (deposit / 100 * rate);
    years++;
 }
 return years;
}

console.log(depositProfit(100, 20, 170))