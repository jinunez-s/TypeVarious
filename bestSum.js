const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if( shortestCombination == null ||combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

console.log(bestSum(7, [5,4,3,7]));
console.log(bestSum(7, [5,2,3]));