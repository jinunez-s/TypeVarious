// var str = "tjfyypzscfsiclrpmexnatljqgrkpaflxbskvu";

// function firstToLast(str, c) {
//   var firstP = str.search(c);
//   var lastP = str.lastIndexOf(c);
//   if (firstP >= 0 || lastP >= 0) return lastP - firstP;
//   else return -1;
// }

// // console.log(firstToLast(str, "t"));

// function testOne(str, c) {
//   if (str.search(c) >= 0 || str.lastIndexOf(c) >= 0)
//     return str.lastIndexOf(c) - str.search(c);
//   else return -1;
// }

// // console.log(testOne(str, "t"));

// function fSplit(str, c) {
//   return str.split(c).length - 1;
// }

// // console.log(fSplit(str, "t"));

// ////////////// split concat join

// var str = "java script";
// var str_o_w = str.split(" ");
// // console.log(str_o_w);
// var str_wd = [];
// var a = [];
// for (let index = 0; index < str_o_w.length; index++) {
//   str_wd[index] = str_o_w[index].split("");
//   a[index] = str_wd[index].join("-");
// }
// var result = a.join(" ");
// // console.log(str_wd);
// // console.log(a);
// // console.log(result);

// function splitAndMerge(str, s) {
//   var str_o_w = str.split(" ");
//   var str_wd = [];
//   var a = [];
//   for (let index = 0; index < str_o_w.length; index++) {
//     str_wd[index] = str_o_w[index].split("");
//     a[index] = str_wd[index].join(`${s}`);
//   }
//   var result = a.join(" ");
//   return result;
// }

// console.log(splitAndMerge("xwmhzxbdzq wbct nyibjzos cedejylt whllo cunjqow qnf owp pwxohhhiwu wyhtn epsxg nizxz", "+"));

var str = "this is an example";
var strU = str.toUpperCase();
var w = strU.split(" ");
for (let index = 0; index < w.length; index++) {
  //w[index].replace(w[index].slice(0, w[index][(w[index].length)-1]), w[index].toUpperCase());
  w[index] =
    w[index].slice(0, w[index].length - 1) +
    w[index][w[index].length - 1].toLowerCase();
}
var result = w.join(" ");

//console.log(result);
///\s*([\S]+)$/

function alienLang(str) {
  var strU = str.toUpperCase();
  var w = strU.split(" ");
  for (let index = 0; index < w.length; index++) {
    w[index] =
      w[index].slice(0, w[index].length - 1) +
      w[index][w[index].length - 1].toLowerCase();
  }
  var result = w.join(" ");
  return result;
}

//console.log(alienLang("Hello World"));


var strI = "Hola"

var s = strI.slice(0,-1);
var l = strI.slice(-1)
// console.log(s);
// console.log(l);

function alienLang2(str) {
  var strU = str.toUpperCase();
  var w = strU.split(" ");
  for (let index = 0; index < w.length; index++) {
    w[index] =
      w[index].slice(0, -1) +
      w[index].slice(-1).toLowerCase();
  }
  var result = w.join(" ");
  return result;
}

//console.log(alienLang2("Hello World"));

///\w+/g
//.\b/g

var u = "abcdefghijklmnopqrstuvwxyz";

for (let index = 0; index < u.length; index++) {
  //console.log(u.charAt(index), u.charCodeAt(index));
}
// charAt() and {charCodeAt() and string.fromCharCode()}

var chars =[]
for (let index =97; index < 123; index++) {
  chars.push(String.fromCharCode(index))
}
var stringabc = chars.join("")
console.log(stringabc);

