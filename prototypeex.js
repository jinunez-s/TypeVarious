let person = {
  canTalk: true,
  canFly() {
    return "No, can't fly";
  },
};

console.log(`Can person talk? ${person.canTalk}`);

let coder = {
  canCode: true,
  canCook() {
    return "Yes, he can cook, so let him cook >:D";
  },
  __proto__: person,
};

let trader = {
  canTrade: true,
  canPlayBasketball() {
    return "No, can't play basketball";
  },
  __proto__: coder,
};

console.log(trader.canFly());
console.log(trader.canPlayBasketball());
console.log(trader.canCook());

//animals
let animal = {
  eats: true,
  walk() {
    return "Animal Walk";
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};
rabbit.walk = function () {
  return "This is the rabbit jumping";
};
console.log(rabbit.jumps);
//rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.walk());
