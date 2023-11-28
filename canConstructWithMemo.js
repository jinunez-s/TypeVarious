const canConstructWS = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;
    for (const word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstructWS(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log("Julio:", canConstructWS('Julio', ["J", "u", "lio"]));
console.log("Barca:", canConstructWS('Barca', ["ar", "B", "a", "c"]));