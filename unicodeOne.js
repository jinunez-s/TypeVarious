//"A" = 65 => "X" = 88
//"B" = 66 => "Y" = 89
//"C" = 67 => "Z" = 90
//"a" = 97 => "x" = 120
//"b" = 98 => "y" = 121
//"c" = 99 => "z" = 122
//"d" = 100 => "a" = 97
//"P" = 80 => "M" = 77
//"Z" = 90 => "W" = 87

function topSecret(str){
  var arr = str.split(" "); //['Khoor', 'Zruog!']
  var ss = [];
  var rr = [];
  for (let index = 0; index < arr.length; index++) {
    ss[index] = arr[index].split("");
  }
  
  for (let index = 0; index < ss.length; index++) {
    for (let j = 0; j < ss[index].length; j++) {
      if (ss[index][j].charCodeAt() >= 65 && ss[index][j].charCodeAt() <= 67) {
        ss[index][j] = String.fromCharCode(ss[index][j].charCodeAt() + 23);
      } else if (
        ss[index][j].charCodeAt() >= 68 &&
        ss[index][j].charCodeAt() <= 90
      ) {
        ss[index][j] = String.fromCharCode(ss[index][j].charCodeAt() - 3);
      } else if (
        ss[index][j].charCodeAt() >= 100 &&
        ss[index][j].charCodeAt() <= 119
      ) {
        ss[index][j] = String.fromCharCode(ss[index][j].charCodeAt() - 3);
      } else if (
        ss[index][j].charCodeAt() >= 97 &&
        ss[index][j].charCodeAt() <= 99
      ) {
        ss[index][j] = String.fromCharCode(ss[index][j].charCodeAt() + 23);
      } 
      // else {
      //   ss[index][j] = String.fromCharCode(ss[index][j].charCodeAt());
      // }
      rr[index] = ss[index].join("")
    }
    var result = rr.join(" ")
  }
  return result;
}
console.log(topSecret("Wrs vhfuhw ilohv: Qr. 1852 Vxshu djhqw BGd, rq d gdun qljkw, vwroh wkh Orool srs iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh"));
// if (ss[j].charCodeAt() >= 65 && ss[j].charCodeAt() <= 67) {
//   ss[j] = String.fromCharCode(ss[j].charCodeAt() + 23);
// } else if (ss[j].charCodeAt() >= 68 && ss[j].charCodeAt() <= 90) {
//   ss[j] = String.fromCharCode(ss[j].charCodeAt() - 3);
// } else if (ss[j].charCodeAt() >= 100 && ss[j].charCodeAt() <= 119) {
//   ss[j] = String.fromCharCode(ss[j].charCodeAt() - 3);
// } else if (ss[j].charCodeAt() >= 97 && ss[j].charCodeAt() <= 99) {
//   ss[j] = String.fromCharCode(ss[j].charCodeAt() + 23);
// } else {
//   ss[j] = String.fromCharCode(ss[j].charCodeAt());
// }