let Word2: string = "abc def";
let level2:number = 1;
let wordLeng:number = Word2.length;
let wordLL: number = wordLeng/2;
let newWordTwo: string = "";
let position: number = 0;
let lastPosition: number = wordLeng -1;
while (level2 <= wordLL) {
    newWordTwo = newWordTwo.concat(Word2[position], Word2[lastPosition], level2.toString())
    position++;
    lastPosition--
    level2++
}
console.log(newWordTwo);
//af1be2cd3

//abc!def
if(wordLeng % 2 == 0){ console.log("La palabra es par");}
else if(wordLeng % 2 != 0){console.log("La palabra es impar");}
else{console.log("WTF");}

