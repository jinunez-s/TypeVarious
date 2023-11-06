// function banckTicket(n) {
//   let input = n;
//   let count = 0;
//   let value = 10;
//   let ticket = 0;
//   if (Math.floor(input / 500) > 0) {
//     count = Math.floor(input / 500);
//     value = Math.abs(input - count * 500);
//     ticket = ticket + count;
//   } else {
//     value = input;
//   }
//   if (Math.floor(value / 200) > 0) {
//     count = Math.floor(value / 200);
//     value = Math.abs(count * 200 - value);
//     ticket = ticket + count;
//   }
//   if (Math.floor(value / 100) > 0) {
//     count = Math.floor(value / 100);
//     value = Math.abs(count * 100 - value);
//     ticket = ticket + count;
//   }
//   if (Math.floor(value / 50) > 0) {
//     count = Math.floor(value / 50);
//     value = Math.abs(count * 50 - value);
//     ticket = ticket + count;
//   }
//   if (Math.floor(value / 20) > 0) {
//     count = Math.floor(value / 20);
//     value = Math.abs(count * 20 - value);
//     ticket = ticket + count;
//   }
//   if (Math.floor(value / 10) > 0) {
//     count = Math.floor(value / 10);
//     value = Math.abs(count * 10 - value);
//     ticket = ticket + count;
//   }
//   if (value != 0) {
//     return -1;
//   } else {
//     return ticket;
//   }
// }
// const resposne = banckTicket(1250);
// console.log(resposne);

// function solve(n) {
//   if (n % 10) return -1;
//   return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
//     let ans = (n / v) | 0;
//     n %= v;
//     return s + ans;
//   }, 0);
// }
// function S(n) {
//   if (n % 10) return -1;
// }
// const vcalor = S(23);
// console.log(vcalor);
