for (let i = 0; i < 7; i++) {
  setTimeout(function () {
    //console.log(i);
  }, 100);
}

//callback function
function greeting(name) {
  //console.log(`Hello ${name}`);
}

function processUserInput(callback) {
  var name = "Heli";
  callback(name);
}

processUserInput(greeting);

//arrowFunction
const add = (num1, num2) => num1 + num2;

//arguments

function fn() {
  //console.log(arguments);
}

fn(2, 2, [2, 1, 3, "5"]);

//closures
function init() {
  var name = "mozilla";
  function displayName(num) {
    //console.log(name, num);
  }
  return displayName;
}
init()(5);

//Closure scope chain

var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}
//console.log(sum(91)(2)(3)(4));

//time optimization
function find() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    //console.log(a[index]);
  };
}

const closure = find();
//console.time("6");
closure(6);
//console.timeEnd("6");
//console.log("=====================================");
//console.time("6");
find(6);
//console.timeEnd("6");

// setTimeOut + block scope with closure
// for (var i = 0; i < 3; i++) {
//     function inner(i){
//         setTimeout(function log() {
//             //console.log(i);
//           }, i * 1000);
//     }
//     inner(i)
// }

//create a private counter
function counter() {
  var _counter = 0;
  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }
  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);
//console.log(c.retrive());

//Make this run only once
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already subscribed to Roadside Coder");
    } else {
      view = "Roadside Coder";
      console.log("Subcribe to ", view);
      called++;
    }
  };
}
let isSubscribed = likeTheVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

//once polyfill implementation
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once((a, b) => {
  //console.log("Hello",a,b);
});

hello(1, 2);
hello();
hello();
hello();
hello();

function agregarNumeros(a) {
  return function (b) {
    return a + b;
  };
}

function multiplicarNumeros(a) {
  return function (b) {
    return a * b;
  };
}

function dividirNumers(a) {
  return function (b) {
    if (b === 0) {
      return "No se divide en 0";
    }
    return a / b;
  };
}

// console.log(agregarNumeros(4)(2));
// console.log(multiplicarNumeros(4)(2));
// console.log(dividirNumers(100)(2));
// console.log(dividirNumers(233)(0));

//Inifinity recurring
function add_(a) {
  return function (b) {
    if (b) return add_(a + b);
    return a;
  };
}

let resultadoAdd_ = add_(5)(2)(2)(8)(10);

console.log(resultadoAdd_());