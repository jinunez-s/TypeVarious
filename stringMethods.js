var str = "codewars";

for (let index = 0; index < str.length; index++) {
  //   console.log(str[index]);
}

function cutIt(arr) {
  let s = Number.MAX_VALUE;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length < s) {
      s = arr[index].length;
    }
  }
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index].slice(0, s);
  }
  return arr;
}
console.log(cutIt(["ab", "cde", "fgh"]));

function testCutIt() {
  let s = "Dios lo bendiga";

  return s.slice(0, 5);
}
//console.log(testCutIt());
