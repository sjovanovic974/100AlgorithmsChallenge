// First solution
function launchSequenceChecker(systemNames, stepNumbers) {
  const stages = {
    stage_1: [1, 2],
    stage_2: [10, 12],
    dragon: [11, 111]
  };

  const divisor = systemNames.length / 2;

  for (let i = 0, x = 0; i < systemNames.length; i++) {
    if (i === divisor) {
      x = 1;
    }

    if (stages[systemNames[i]][x] !== stepNumbers[i]) {
      return false;
    }
  }

  return true;
}

console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_1', 'stage_2', 'dragon'],
    [2, 1, 12, 111]
  )
);
