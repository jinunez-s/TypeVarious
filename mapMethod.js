// var test_uno = [1,2,3,4,5,0,10];

// const newArray = test_uno.map((x) => x * 2);
// console.log(newArray);

// var a = [...Array(4)];
// var b = [...Array(6)].map((_,i) => i);

// console.log(b);

// var a = [2,4,6,8];
// var b = a.map((_,i,arr) => arr[arr.length-1-i]);

// b.forEach(function (x){
//     console.log(x);
// });
// odd
//even

var str = 'oooo';

var income = ['12334', '234234']
console.log(str.length);
//1
var result = income.map((x)=>{
    if((x.length) % 2 == 0) {
        var division= (str.length/2);
        var newS = str.slice(0,division);
        var r = newS + '|' + str.slice(division);
        return r;
    }else{
        var division_when_is_odd = (str.length-1)/2;
        var b = str.slice(0,division_when_is_odd);
        var c = b + '|' + str.slice(division_when_is_odd+1);
        return c
    }
})

//check if its odd or even
if((str.length) % 2 == 0 ){
    var division= (str.length/2);
    var newS = str.slice(0,division);
    var r = newS + '|' + str.slice(division);
}else{
    var division_when_is_odd = (str.length-1)/2;
    var b = str.slice(0,division_when_is_odd);
    var c = b + '|' + str.slice(division_when_is_odd+1);
}
console.log(c);
console.log(r);