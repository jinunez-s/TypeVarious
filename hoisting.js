//Global scope
const x = 3;
var d = 3;
let t = 0;
{
  // block scope
  const x = 2;
  let z = 6;
  var y = 5;
}
//console.log(y);
{
  var y = 1;
}
// console.log(y);

var tminus = function (a, b) {
  return true;
};
var tminus = (a, b) => a + b;
tminus = (a) => a + 1;
var string = "ababagbabab";
// console.log(string.replace(/[a-b]/g, (x) => x.toUpperCase()));
//deconstruction
var [a, b] = [1, 2];
[b, a] = [a, b];
// console.log(a);
// console.log(b);
var [a, ...b] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
var plus = function (...num) {
  var rs = 0;
  for (const x of num) {
    rs += x;
  }
  return rs;
};
// console.log(plus(1, 2, 3, 4, 5, 6));
// console.log(plus(6, 6, 6, 6, 6, 6));
var multi = function (a, ...b) {
  for (let index = 0; index < b.length; index++) {
    b[index] *= a;
  }
  return b;
};
//console.log(multi(2, 3, 4, 5, 6, 7, 8, 9));