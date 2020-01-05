// First solution
function validTime(time: string): boolean {
  const timeArray = time.split(':');
  const hours = parseInt(timeArray[0]);
  const minutes = parseInt(timeArray[1]);

  if (hours < 0 || hours > 24) return false;
  if (minutes < 0 || minutes > 59) return false;

  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
console.log(validTime('23:59'));
