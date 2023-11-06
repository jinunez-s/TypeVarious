// var a = { x: 10, y: 20 };
// var b = Object.create(a);

// b.p = 100;
// b.q = 200;

// console.log(b);

// console.log("b.x", b.x);
// console.log("b.y", b.y);

// console.log("b.p", b.p);
// console.log("b.q", b.q);

// var o = { property_one: true };

// Object.defineProperty(o, "x", { value: "old" });

// Object.defineProperty(o, "y", {
//   get: function () {
//     return "old";
//   },
//   set: function (value) {
//     console.log("Setter called with value: ", value);
//   },
// });

// var a = Object.create(o);

// a.x = "what";
// console.log("a.x", a.x);

// a.y = "is this";
// console.log("a.y", a.y);
// console.log("o", o);
// console.log("a", a);

//as we know from the code above, there are no such properties as x and y on the object a, and so we might expect the expressions a.x = 'new' and a.y = 'new' to create those properties on a.

//this is not the case

// instead, property assigment expressions also involve a search for the property's key on an object and, if not found, then on the prototype chain of that object.
var proto = { z: 0 };

//Tipo 2
//var a = Object.create(proto);
//Tipo 1
// var a = {
//   __proto__:proto,
//   x:0
// }
//a.x = 0;
// a.y = 1;
// a.y = 0;

//Object.defineProperty(a, 'x',{value: 1})
console.log(a);
console.log(a.hasOwnProperty("x"));
// console.log(a.hasOwnProperty('x'));
// console.log(a.hasOwnProperty('z'));
// console.log('proto.z', proto.z);

// const myDate = new Date(1995, 11,16)

// console.log(myDate.getYear());

// myDate.getYear = function(){
//     console.log("Something else!");
// }

// myDate.getYear();

// const personPrototype = {
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// function Person(name) {
//   this.name = name;
// }

// Object.assign(Person.prototype, personPrototype);
//Object target, objecrt source
//this is a method that assigns all properties to the target object.

// const j = new Person("Julio");
// j.greet();

// console.log(j);

// let f = new Person("Usher");
// console.log(f);

// f.greet();

function Shape(x, y, fill = "#000") {
  this.x = x;
  this.y = y;
  this.fill = fill;
}

Shape.prototype.move = function (x, y) {
  console.log(`Moving the shape to ${x}, ${y}.`);
};

Shape.prototype.delete = function (x, y) {
  console.log(`Deleting the shape.`);
};

function Rect(width, height, x, y, fill) {
  Shape.call(this, x, y, fill);
  this.width = width;
  this.height = height;
}

Rect.prototype = new Shape();

Rect.prototype.draw = function () {
  console.log("Drawing the rectangle");
};
