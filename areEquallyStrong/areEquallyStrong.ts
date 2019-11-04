//First solution
function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;

  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;

  if (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) {
    return true;
  } else {
    return false;
  }
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
