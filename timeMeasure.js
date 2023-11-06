let b = BigInt(1000000000)
console.log(b);
while (0<b) {
  console.log(b);
  b =  b/129n;
}
function find(index) {
  let a = [];
  for ( var i = 0; i < 10; i++) {
    a.push(i);
  }
}
function assigment(){
    let a = [];
    for (let index = 0; index < 10; index++) {        
        a[index] = 1;
    }
}
console.time("6");
find("6");
console.timeEnd("6");
console.time("8");
assigment("8");
console.timeEnd("8");
