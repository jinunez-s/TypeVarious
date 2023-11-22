const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 7]));
console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(7, [2, 4]));
console.time("1")
console.log(canSum(300, [7,14]));
console.timeEnd("1");