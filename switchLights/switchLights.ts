// First solution
function switchLights(a: number[]): number[] {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      changeState(a, i);
    }
  }
  return a;
}

function changeState(arr, index) {
  for (let i = 0; i <= index; i++) {
    if (arr[i] === 1) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
