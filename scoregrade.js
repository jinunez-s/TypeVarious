var score={
    S:0,
    A:0,
    B:0,
    C:0,
    D:0,
    X:0
}

function countGrade(a){
    a.filter(x => {
       if(x == 100){
        score.S += 1;
       }else if(x < 100 && x >= 90){
        score.A += 1;
       }else if(x < 90 && x >= 80){
        score.B += 1;
       }else if(x < 80 && x >= 60){
        score.C += 1;
       }else if(x < 60 && x >= 0){
        score.D += 1;
       }else if(x == -1){
        score.X += 1;
       }
    })
    return score;
}

var a = [50,60,70,80,90,100, -1];
const result = countGrade(a);
console.log(result);