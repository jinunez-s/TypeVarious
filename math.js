var word;
var wordL;
var newWord = "";
var level = 1;
word = "Can I pet that dog?";
word = "abcdef";
wordL = word.length; //range
console.log(wordL);
var toplevel;
if (word.length % 2 != 0) {
    console.log("Hola, la palabra es impar", word[(wordL - 1) / 2]);
    toplevel = (wordL - 1) / 2; // delete word
}
else {
    toplevel = (wordL) / 2;
    console.log("La palabra es par");
    var i = 0;
    var j = -1;
    newWord = newWord.concat(word[0], word[wordL - 1], level.toString());
    level++;
    i++;
    j++;
    newWord = newWord.concat(word[1], word[wordL - 2], level.toString());
    level++;
    i++;
    newWord = newWord.concat(word[2], word[wordL - 3], level.toString());
    console.log(newWord);
    console.log(toplevel);
    console.log("Hola");
}
// for con dos variables//JS
function charConcat(str) {
    var res = '';
    for (var i = 0, k = str.length - 1; i < k; i++, k--) {
        res += "".concat(str[i]).concat(str[k]).concat(i + 1);
    }
    return res;
}
console.log(charConcat("abc def"));
