function solve(weight0, weight1, weight2) {
  return weight0 > weight1
    ? weight0 > weight2
      ? 0
      : 2
    : weight1 > weight2
    ? 1
    : 2;
}

console.log(solve(23, 15, 23));

function myFunction(w0, w1, w2) {
  if (w0 > w1) {
    if (w0 > w2) {
      return w0;
    } else {
      return w2;
    }
  } else if (w1 > w2) {
    return w1;
  } else {
    return w2;
  }
}

console.log(myFunction(23, 15, 23));
