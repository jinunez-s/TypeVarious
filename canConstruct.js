const canConstruct = (target, wordbank) => {
    if(target === '') return true;
    for (let word of wordbank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordbank) === true){
                return true;
            }
        }
    }
    return false;
}

console.log(canConstruct('Julio', ["J", "u", "lio"]));
console.log(canConstruct('Julio', ["J", "ul", "io", "l"]));
console.log(canConstruct('Julio', ["j", "ul", "io", "l"]));