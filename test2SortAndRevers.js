function sortIt(arr) {
  const newArr = arr.slice();

  newArr.sort((a, b) => {
    const countA = arr.filter((element) => element === a).length;
    const countB = arr.filter((element) => element === b).length;

    if (countA !== countB) {
      return countA - countB;
    } else {
      return b - a;
    }
  });
  
  return newArr;
}

const originalArray = [3, 2, 2, 2, 2, 3, 1];
const sortedArray = sortIt(originalArray);

console.log("Sorted Array", sortedArray);
