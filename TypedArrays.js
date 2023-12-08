let buffer = new ArrayBuffer(16); //create a 16 byte buffer
let dv1 = new DataView(buffer);
let dv2 = new DataView(buffer, 10, 3);

dv1.setInt8(11,42);

let num = dv2.getInt8(1);
console.log(num);
let number = 2;
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
console.log(NaN == NaN);