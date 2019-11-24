// First solution
function proCategorization(pros, preferences) {
  const map = {};
  const output = [];

  for (let i = 0; i < pros.length; i++) {
    map[pros[i]] = preferences[i];
  }

  preferences = preferences.reduce((acc, el) => acc.concat(el));
  preferences = preferences.sort();

  const finalList = new Set(preferences);

  finalList.forEach(preference => {
    const pref = [preference];
    const users = [];
    for (let pros in map) {
      if (map[pros].includes(preference)) {
        users.push(pros);
      }
    }
    output.push([pref, users]);
  });

  return output;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning']
    ]
  )
);
