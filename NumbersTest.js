var num = 111;
var a = num.toString(2),
  b = num.toString(8),
  c = num.toString(16);
// console.log(a, b, c);
// console.log(`Hexadecimal es ${c}`);

function colorOf(r, g, b) {
  var rS = r.toString(16),
    gS = g.toString(16),
    bS = b.toString(16);
  if (r == 0) {
    rS = r.toString(16).repeat(2);
  }
  if (g == 0) {
    gS = g.toString(16).repeat(2);
  }
  if (b == 0) {
    bS = b.toString(16).repeat(2);
  }
  if (rS.length == 1) {
    rS =+ "0" + rS;
  }
  if (gS.length == 1) {
    gS =+ "0" + gS;
  }
  if (bS.length == 1) {
    bS =+ "0" + bS;
  }
  return "#" + rS + gS + bS;
}

const testColor = colorOf(0, 111, 0);
console.log(testColor);
const testColor2 = colorOf(1, 2, 3);
console.log(testColor2);
const testColor3 = colorOf(255, 0, 0);
console.log(testColor3);


