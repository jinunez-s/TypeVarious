var Word2 = "abc def";
var level2 = 1;
var wordLeng = Word2.length;
var wordLL = wordLeng / 2;
var newWordTwo = "";
var position = 0;
var lastPosition = wordLeng - 1;
while (level2 <= wordLL) {
    newWordTwo = newWordTwo.concat(Word2[position], Word2[lastPosition], level2.toString());
    position++;
    lastPosition--;
    level2++;
}
console.log(newWordTwo);
//af1be2cd3
//abc!def
if (wordLeng % 2 == 0) {
    console.log("La palabra es par");
}
else if (wordLeng % 2 != 0) {
    console.log("La palabra es impar");
}
else {
    console.log("WTF");
}
