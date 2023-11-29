function sortingNumber(numbers){
    var contador = 0;
    var myMochila = {};
    var resultA = [];
    var temp = 0; var i = 0;
    var pass = true;
    for (let index = 0; index < numbers.length; index++) {        
        if(myMochila.hasOwnProperty(numbers[index])){
            myMochila[numbers[index]] += 1;
        }else{
            myMochila[numbers[index]] = 1; 
        }
    }
    
    while (pass) {// mientras sea true, hace la operacion
        //verificar quien tiene mayor frecuencia y mayor valor
        for (const key in myMochila) {
            if(temp <= myMochila[key]){
                temp = myMochila[key]; //frecuencia 
                i = Number(key); //valor a pushear
            }        
            myMochila[key] = NaN;
        
            for (let index = 1; index <= temp; index++) {
                resultA.push(i)
            }
            resultA.reverse();
            temp = 0; i = 0;
            
            //verifica que haya un numero en el objecto para seguir con la operacion.
            for (const key in myMochila) {
                if(typeof myMochila[key] == 'number'){
                    pass = false;
                }
            }
        }
    }
    return resultA;
}

var arrayTest = [3,3,2,2,2,2,3,3,3,1];

console.log(sortingNumber(arrayTest));