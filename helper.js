var target = "JulioaNunezb"
var wordbank = ["ao", "zb", "c", "j", "J"];

for (let word of wordbank) {
    if(target.indexOf(word) === 0){
        console.log(target.indexOf(word));
        console.log(word.length);
        const suffix = target.slice(word.length);
        console.log(suffix);
    }
}