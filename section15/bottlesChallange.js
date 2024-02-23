let n = 99;
while (n >= 0) {
  if (n === 1) {
    console.log(
      `${n} bottle of beer on the wall, ${n} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
    );
  }
  if (n > 1) {
    console.log(
      `${n} bottle of beer on the wall, ${n} bottle of beer. Take one down and pass it around, ${
        n - 1
      } bottles of beer on the wall.`
    );
  }
  n--;
}
