//your are the boos 🕶 
 
const allConstructs = (target, wordBank) => {
    target = target.replace(/\s/g, "");
    if(target === '') return [[]];
    const result =[];

    for (let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstructs(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);            
            result.push(...targetWays)
        }
    }
    return result;

}

console.log(allConstructs('DivineReaper',['Di', 'vi', 'ne', 'Reaper', 'Div','ine', 'Rea','per']));