// First Solution
function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  const faresEstimations = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    let fareEstimation =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    faresEstimations.push(Math.round(fareEstimation * 100) / 100);
  }
  return faresEstimations;
}
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
