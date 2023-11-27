const fruits = ["Apple", "Grape", "Pear", "Watermelon"];

// console.time("1");
// fruits.forEach(function (fruits) {
//   console.log(fruits);
// });
// console.timeEnd("1");
// console.time("2");
// console.log("=================== FOR =================");
// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }
// console.timeEnd("2");

//for each with arrow function
// console.log("=================== FOR EACH ARROW FUNCTION =================");
// console.time("3");
// fruits.forEach((fruits) => console.log(fruits));
// console.timeEnd("3");

const numbers = [3, 33, 12, 21, 45, 554, 23, 11, 9, 6];

// numbers.sort((a,b) => {
//     return b-a;
// });

//console.log(numbers);

var c = false;
while (c == false) {
    c = true;
  for (let index = 0; index < numbers.length; index++) {    
    if (numbers[index] > numbers[index + 1]) {
      var temp = numbers[index];
      numbers[index] = numbers[index + 1];
      numbers[index + 1] = temp;
      c = false;
    }
  }
}
// console.log({
//     'posicion 1': numbers[0], 'posicion 2': numbers[1], 'posicion 3': numbers[2]
// });
var newArray = numbers.slice();
console.log('newArray', newArray);
console.log('numbers', numbers);
var arrayDeletedObjects = numbers.splice(0, 3);
// console.log(arrayDeletedObjects);
// console.log(numbers);
//numbers.forEach(function (numbers) {
  //console.log(numbers);
//});

//creating prototype

console.log(typeof numbers, typeof newArray, typeof arrayDeletedObjects);//Object


