const myStack = [];

myStack.push("Sven");
myStack.push("Crystal Maiden");
myStack.push("Lina");
myStack.push("Sniper");
myStack.push("Phantom Assasin");
console.log(myStack);

console.log(myStack.pop());// PA
console.log(myStack.shift()); // Sven

console.log(myStack);
myStack.pop(); //Sniper
myStack.pop() //Lina
console.log(myStack); //CM

myStack.pop();//CM
console.log(myStack.pop()); // undefined