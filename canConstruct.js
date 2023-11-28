const canConstruct = (target, wordbank) => {
    if(target === '') return true;
    
    for (let word of wordbank) {
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            var store = [];
            store.push(suffix);
            if(canConstruct(suffix, wordbank) === true){
                return true;
            }
        }
        console.log('store', store);
    }
    
    return false;
}

console.log("Julio:", canConstruct('Julio', ["J", "u", "lio"]));
console.log("Barca:", canConstruct('Barca', ["ar", "B", "a", "c"]));