var shuffle = function (arr, ...num) {
  for (let index = 0; index < num.length; index++) {
    let a = num[index][0];
    let b = num[index][1];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};
console.log(shuffle([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
var loop = function (...x) {
  var a = x.length;

  //console.log(x[0].length);
};
loop(
  [1, 3, 4, [1000, 2000, 3000, 4000], 6, 5, 6, 6, 7, 7, 8, 8],
  [123, 345, 678, 999],
  [111, 222, 333, 444, 555, 666, 777, 888, 999]
);
//recursividad
const fac = (numero) => {
  if (numero === 0) {
    return 1;
  }
  return numero * fac(numero - 1);
};
