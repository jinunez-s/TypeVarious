var assert = require('assert')
let a = Symbol.keyFor(Symbol.for("SymbolValue")) == "SymbolValue";
// console.log(a ? true:false);
//keyFor: Takes the symbol value and returs the string key corresponding to it.
//for: Takes a string key and returns a symbol value.
const aS = Symbol("a");
//console.log( aS === aS);;
let COLOR_VIOLET = Symbol('Violet');
const COLOR_YELLOW = Symbol('Yellow')
function getComplement(p){
switch (p) {
    case COLOR_YELLOW:
        COLOR_VIOLET = Symbol('Violet');
        return COLOR_VIOLET;

    default:
        break;
}
}
console.log(getComplement(COLOR_YELLOW) === COLOR_VIOLET);