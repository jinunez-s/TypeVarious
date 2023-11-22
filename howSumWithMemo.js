const howSum = (targetSum, numbers, memo={}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
}