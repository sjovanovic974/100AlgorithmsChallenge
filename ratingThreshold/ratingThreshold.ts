function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const arr: number[] = [];
  ratings.forEach((el, index) => {
    const sum = el.reduce((acc, num) => (acc += num));
    const avg = sum / el.length;

    if (avg < threshold) {
      arr.push(index);
    }
  });
  return arr;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
