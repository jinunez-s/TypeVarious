//Binario a decimal
function miFunction(n) {
  let sum = 0;
  if (typeof n == "number") {
    var n = n.toString();
  }
  for (let index = 0; index < n.length; index++) {
    sum = sum + n[index] * 2 ** (n.length - 1 - index);
  }
  return sum;
}
console.log(miFunction("1001"));
//Descuento
function descuento(a, b) {
  let x = a * (b / 100);
  return a - x;
}
console.log(descuento(1000, 20));
// Anios a la fecha de hoy
function yearToDay(y, m, d) {}

let ms = new Date().getTime() - new Date(1997, 0, 0).getTime();
let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
if(ms < 0){
    years = Math.abs(years);
    console.log(`Faltan ${years} anios para llegar a la fecha ingresada`);
}else{
    
    console.log(`Han pasado ${years} anios desde la fecha ingresada`);
}

// protype
