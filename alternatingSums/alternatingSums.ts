// Solution using forEach instead of regular for loop
function alternatingSums(a: number[]): number[] {
  let teamASum: number = 0;
  let teamBSum: number = 0;

  a.forEach((num, index) => {
    if (index % 2 === 0) {
      teamASum += num;
    } else {
      teamBSum += num;
    }
  });

  return [teamASum, teamBSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

/*
// First solution
function alternatingSums(a: number[]): number[] {
  let teamASum: number = 0;
  let teamBSum: number = 0;

  for (let i: number = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamASum += a[i];
    } else {
      teamBSum += a[i];
    }
  }

  return [teamASum, teamBSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

*/
