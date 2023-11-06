var num = 100.329;

var a = num.toFixed(2),
  b = num.toExponential(4),
  c = num.toPrecision(6);

// console.log([a, b, c]);
// console.log(typeof a, typeof b, typeof c);
var d = parseInt(a),
  e = parseFloat(a),
  f = +a;
// console.log([d, e, f]);

// console.log(typeof d, typeof e, typeof f);

function howManySmaller(arr, n) {
  let c = 0;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index].toFixed(2);
    if (n > arr[index]) c++;
  }
  return c;
}

var testArr = [1.1888, 1.1868, 1.1838];

console.log(howManySmaller(testArr, 1.19));
// console.log(testArr.filter((e) => +e.toFixed(2) < n).length);