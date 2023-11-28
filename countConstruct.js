const countConstuct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;
    let count = 0;
    for (let word of wordBank) {
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstuct(target.slice(word.length), wordBank, memo);
            count += numWaysForRest;
        }
    }
    memo[target] = count;
    return count;
}

console.log("Julio:", countConstuct('Julio', ["J", "u", "lio", "Julio", "Ju", "lio"]));