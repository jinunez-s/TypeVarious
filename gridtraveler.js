const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
  return memo[key];
};

console.time("1");
console.log(gridTraveler(2, 2));
console.timeEnd("1");
console.time('2');
console.log(gridTraveler(2, 2));
console.timeEnd('2');
console.log(gridTraveler(6, 9));