function FiveLine(s) {
  var str = s.trim();
  var z = "";
  for (let index = 1; index < 6; index++) {
    if (index == 1) {
      z = str.repeat(index);
    } else {
      z += "\n" + str.repeat(index);
    }
  }
  return z;
}

console.log(FiveLine("           Ok               "));
