var arr = ['1234', 'abcd'];
var result = arr.map((x)=>{
    if((x.length) % 2 == 0) {
        var division= (x.length/2);
        var newS = x.slice(0,division);
        var r = newS + '|' + x.slice(division);
        return r;
    }else{
        var division_when_is_odd = (x.length-1)/2;
        var b = x.slice(0,division_when_is_odd);
        var c = b + '|' + x.slice(division_when_is_odd+1);
        return c
    }
})

console.log(result);