const dance = function (arr, d, s) {
  let c = 0;
  while (c < s) {
    for (let index = 0; index < arr.length; index++) {
      let a = arr[index].shift();
      //   console.log(`Valor en ${index} es ${arr[index]}`);
      //   console.log(a);
      if (index > 0) {
        arr[index - 1].push(a);
      } else {
        arr[arr.length - 1 - index].push(a);
      }
    }
    c++;
  }
  //console.log(arr);
};

const danceRight = function (arr, d, s) {
  let c = 0;
  while (c < s) {
    for (let index = 0; index < arr.length; index++) {
      let a = arr[index].pop();
      //   console.log(`Valor en ${index} es ${arr[index]}`);
      if (index == arr.length - 1) {
        arr[0].unshift(a);
      } else {
        arr[index + 1].unshift(a);
      }
    }
    c++;
  }
  //console.log(arr);
};

dance(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "left",
  1
);

danceRight(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "left",
  2
);

function infiniteLoop(arr, d, n) {
  let c = 0;
  switch (d) {
    case "right":
      while (c < n) {
        for (let index = 0; index < arr.length; index++) {
          let a = arr[index].pop();
          //   console.log(`Valor en ${index} es ${arr[index]}`);
          if (index == arr.length - 1) {
            arr[0].unshift(a);
          } else {
            arr[index + 1].unshift(a);
          }
        }
        c++;
      }
      return arr;
    case "left":
      while (c < n) {
        for (let index = 0; index < arr.length; index++) {
          let a = arr[index].shift();
          //   console.log(`Valor en ${index} es ${arr[index]}`);
          //   console.log(a);
          if (index > 0) {
            arr[index - 1].push(a);
          } else {
            arr[arr.length - 1 - index].push(a);
          }
        }
        c++;
      }
      return arr;
    default:
      break;
  }
}

console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "left",
    1
  )
);
console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10,11,12]
    ],
    "right",
    4
  )
);
console.log(
  infiniteLoop(
    [
      [1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
    ],
    "left",
    2
  )
);
