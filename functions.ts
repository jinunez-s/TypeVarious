// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

function add(number1: number, number2: number){
  return number1 + number2;
}

let combineValues:Function;

combineValues = add;

console.log(combineValues(15,75));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1+n2;
  cb(result);
}

addAndHandle(10,20, (result) => {console.log(result);});

function sayHi(): void {
  console.log("Que pasa amigos");
}
sayHi();

function sayHi2(): undefined {
  console.log("No pasa nada amigos");
}
sayHi2();