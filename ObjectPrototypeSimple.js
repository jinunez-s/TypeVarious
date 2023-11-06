let test = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "usa",
};

let test_Two = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "usa",
};
//console.log("In List Order");
for (const prop in test) {
  //.log(test[prop]);
}
//console.log("\t");
//console.log("In Ascending Order");
for (const prop in test_Two) {
  //console.log(prop);
}

let user = { x: null };
let user_Two = new Object();

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
delete user.surname;
//console.log("User: ", user);

function isEmpty(obj) {
  let arr = Object.keys(obj);
  if (arr.length == 0) {
    return true;
  }
  return false;
}

//console.log(isEmpty(user));

const isObjectEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

//console.log(isObjectEmpty(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
//console.log(isEmpty(salaries));

if (isEmpty(salaries) == true) {
  //console.log("Zero, Total is: ", sum);
} else {
  for (const key in salaries) {
    sum += salaries[key];
  }
  //console.log("Total is: ", sum);
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
//console.log(menu);

function isObjectEmptyF(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }
  return result;
}

let monitor = {
  brand: "Hp",
  size: 24,
  response: "1ms",
  display: "1080p",
  ports: { port_uno: "HDMI", port_dos: "VGA" },
};

//console.log(listAllProperties(monitor));

multiplyNumeric(monitor);
//console.log(monitor);

let car1 = new Object();

car1.year = 2023;
car1.make = "Mustang";
car1.model = "Ford";

car1.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  //console.log(result);
};

car1.displayCar();

const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};

const intern = {
  name: "Blue",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  //console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;
intern.metodOne = sayHi;
// Manager.sayHi();
// intern.metodOne();

const myObj = { a: 0 };

Object.defineProperties(myObj, {
  b: {
    get() {
      return this.a + 1;
    },
  },
  c: {
    set(x) {
      this.a = x / 2;
    },
  },
});

// console.log(myObj);

// console.log(myObj.b);
// myObj.c = myObj.b;
// console.log("myObj.a", myObj.a);

let new_Date = new Date();
//return the current date and time
new_Date.toLocaleString();

//day of the month
new_Date.getDate();

//return the year
new_Date.getFullYear();

console.log(`
La hora actual es: ${new_Date.toLocaleString()} \n
El dia del mes es: ${new_Date.getDate()}\n
El anio actual es: ${new_Date.getFullYear()}\n
`);
