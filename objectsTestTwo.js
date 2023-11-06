let user = {
  name: "John",
  age: 30,
};
let userTwo = new Object();
let userTwoTwo = {};
// console.log(typeof userTwo, typeof userTwoTwo);
user.isAdmin = true;
// console.log(user.isAdmin);
delete user.age;
user["Likes birds"] = false;
// console.log(user);
//Inherit Properties
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};
//console.log(o.__proto__.__proto__.d);
//Inherit Methods
const parent = {
  value: 2,
  Method() {
    return this.value + 1;
  },
};
//console.log(parent.Method());
const child = {
  __proto__: parent, //inherinth all methods in class parent
};
//console.log(child.Method());
//console.log(typeof parent, typeof child);
child.value = 4;
//console.log(child.Method());
//Constructors
const boxes = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 3,
    getValue() {
      return this.value;
    },
  },
];


const boxPrototype = {
  getValue(){
    return this.value;
  },
};

const boxesTwo = [
  {value:1, __proto__:boxPrototype},
  {value:2, __proto__:boxPrototype}
]
//constructor function
function Boxx (value){
  this.value = value;
}

Boxx.prototype.getValue = function(){
  return this.value;
}

const boxesN = [new Boxx(1), new Boxx(2), new Boxx(3)];//new Box(1) is a instance created from the Box constructor function


function Keys (n){
  this.n = n;
}

Keys.prototype.getN = function(){
  return this.n;
}

const KeysN = [new Keys(2), new Keys(3)];

console.log(KeysN);