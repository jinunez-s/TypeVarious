function padIT(str, n) {
  var loopC = 0;
  var str_arreglo = Array.from(str);
  while (loopC < n) {
    if (loopC % 2 == 0) {
      str_arreglo.push("*");
    } else {
      str_arreglo.unshift("*");
    }
    loopC++;
  }
  return str_arreglo.join("");
}

const test = padIT("a", 11);
console.log(test);
//console.log(test.length);

a = "a";

test2 = (s, m) => "*".repeat((m + 1) / 2) + s + "*".repeat(m / 2);

// console.log(test2("a", 10));

function numbers(n) {
  var a = Math.floor(n / 2);
  var b = Math.ceil(n / 2);
  return { a, b };
}

// console.log(numbers(3));

// console.log("*".repeat(3)
// + "A" + "*".repeat(3));

function grabDoll2(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      //console.log(dolls[i]);
    }
  }
  return bag;
}

function grabDoll(dolls) {
  var bag = [];
  for (var i = 0; i < dolls.length; i++) {
    switch (dolls[i]) {
      case "Hello Kitty":
        if (bag.length < 3) bag.push(dolls[i]);
        else break;
      case "Barbie doll":
        if (bag.length < 3) bag.push(dolls[i]);
        else break;
      default:
        continue;
    }
    //   if(dolls[i]  == "Hello Kitty" || dolls[i]  == "Barbie doll") if(bag.length < 3) {bag.push(dolls[i])} else break;
  }
  return bag;
}
const testBarbie = grabDoll([
  "Mickey Mouse",
  "Barbie doll",
  "Hello Kitty",
  "Hello Kitty",
  "Hello Kitty",
  "Snow white",
]);

console.log(testBarbie);

//for in

//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
//   }

//   //for of
//   for (const iterator of object) {

//   }

var h = new Array();
//console.log(typeof h);

//number
var g = new Number();
g = NaN;
g = 2;
console.log(typeof g);
if(typeof(g) == "number"){console.log("YES")}else{console.log("No way")};
//console.log(isNaN(g));
-Infinity
var f = Infinity;
// console.log(isFinite(g));
// console.log((f));
// console.log(typeof(f));

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"

var x = Number.MAX_VALUE;
var z = NaN;
// if(x == Number.MAX_VALUE){console.log("Si es MAX Value")}
// if(isNaN(z)){console.log("El numero z es NaN")}
var n = -Number.MAX_VALUE*2;
// if(n == Number.NEGATIVE_INFINITY){console.log("Es infinito negativo")}

function queNumeroEs(n){
    if(isNaN(n)){return "Input number is Number.NaN";}
    else if(n == Number.NEGATIVE_INFINITY){return "Input number is Number.NEGATIVE_INFINITY";}
    else if(n == Number.POSITIVE_INFINITY){return "Input number is Number.POSITIVE_INFINITY";}
    else if(n == Number.MAX_VALUE){return "Input number is Number.MAX_VALUE";}
    else if(n == Number.MIN_VALUE){return "Input number is Number.MIN_VALUE";}
    else{return "404"}
}

//queNumeroEs(-Number.MAX_VALUE*2)