let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

console.log('Value: ', value);

//Numeric Conversion
let str = "123";
console.log(typeof str);
console.log(str);

let num = Number(str);
console.log(typeof num);
console.log(num);

let age = Number("An arbitrary string")

console.log(age);

console.log(Number("        123         "));   
console.log(Number("123z"));
console.log(Number(true));
console.log('Number(false)', Number(false));
console.log('Number(null)', Number(null));

console.log('Boolean(1):', Boolean(1));
console.log('Boolean(0):', Boolean(0));

console.log('Boolean("hello")', Boolean("hello"));
console.log('Boolean("")', Boolean(""));