function computeClosestToZero(ts) {
  if (ts.length === 0) {
    return 0;
  }
  let closestTemperature = ts[0];
  for (let i = 0; i < ts.length; i++) {
    const currentTemperature = ts[i];
    if (Math.abs(currentTemperature) < Math.abs(closestTemperature)) {
      closestTemperature = currentTemperature;
    } else if (Math.abs(currentTemperature) === Math.abs(closestTemperature)) {
      closestTemperature = currentTemperature;
    }
  }
  for (let i = 0; i < ts.length; i++) {
    if (ts[i] === Math.abs(closestTemperature) && ts[i] > 0) {
      closestTemperature = ts[i];
    }
  }
  return closestTemperature;
}
let test = [10, 12, 15, -12, -15, 11, 21, -10, 5, -5];
const result = computeClosestToZero(test);

console.log(result);
test.sort(function (a, b) {
  return b - a;
});
//console.log(test);
test.forEach((element) => {
  //console.log(element);
});

function greaterThan(n) {
  let greater = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 0) {
      greater.push(n[i]);
    }
  }
  return greater;
}

let greaterThanA = greaterThan(test);

greaterThanA.sort((a, b) => {
  return a - b;
});

greaterThanA.forEach((element) => {
  //console.log(element);
});


if("2" === 2){
  console.log('falso');
}else{
  console.log("What");
}