function arraySum(arr) {
  var a = [];
  var sumt = 0;

  for (let index = 0; index < arr.length; index += 3) {
    b = arr.slice(index, index + 3);
    for (let j = 0; j < b.length; j++) {
      sumt += b[j];
    }
    a.push(sumt);
    sumt = 0;
  }
  return a;
}

arr = [1, 3, 5, 2, 4, 6, 7, 6];
arr.sort(function (a, b) {
  return b - a;
});
