const disponible = {
  flour: 1200,
  sugar: 1200,
  eggs: 5,
  milk: 200,
  apples: 22,
  oil: 22,
};
const receta = {
  flour: 500,
  sugar: 200,
  eggs: 1,
};

function checkAvailability(recipe, aviable) {
  let maxCakes = Infinity;

  for (const ingredient in recipe) {
    if (aviable.hasOwnProperty(ingredient)) {
      const cakePossible = Math.floor(aviable[ingredient] / recipe[ingredient]);
      maxCakes = Math.min(maxCakes, cakePossible);
    } else {
      return 0;
    }
  }
  return maxCakes;
}

console.log(checkAvailability(receta, disponible));

//Code Wars
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}
//Metodo reduce
const numerosTest = [2,3,4,4,5,5]

const suma = numerosTest.reduce(function(x,y){
    return x + y
}, 0);

console.log(suma);
const sumader = numerosTest.reduce((f,r)=>{
    return f + r + r+ r
})

console.log(sumader);
