let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};
// console.log(rabbit.jumps);

// delete rabbit.jumps;

// console.log(rabbit.jumps);

// delete animal.jumps;

// console.log(rabbit.jumps);

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};
let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

let hamster = {
    stomach: [],
    eat(food){
        this.stomach = [food];
    }
}
let speedy = {
    __proto__: hamster
}
let lazy = {
    __proto__:hamster
}

speedy.eat("Apple")
console.log(speedy.stomach);
console.log(hamster.stomach);
console.log(lazy.stomach);