var arr=[1,2,3,11,21,31];

arr.sort((a,b)=> a-b);
//console.log(arr);
arr.push(4)

arr.sort(function(a,b) {return a-b;})
//console.log(arr);

const compare = (numbers) => {
    var temparr = [...numbers];
    var arr = [];
    return temparr === numbers ? true: false;
}

//console.log(compare([12,2,2,3,4,45,5]));

var arreglo = [1,1,1,2,3,3,5,6,6,6,7,1,5,7,7,7,7,7,4,3,2,1,7,7,7,8];



var myMochila = {

}

for (let index = 0; index < arreglo.length; index++) {
    if(myMochila.hasOwnProperty(arreglo[index])){
        myMochila[arreglo[index]] += 1;
    }else{
        myMochila[arreglo[index]] = 1;
    }    
}
console.log(typeof myMochila['1'] == 'number');
//obtener el mas alto
var temp = 0;
var ind = 0;
for (const key in myMochila) {
    if(temp <= myMochila[key]){
        temp = myMochila[key];
        ind = Number(key);
    }   
}
myMochila[ind.toString()] = NaN;
temp=0;
ind=0;
for (const key in myMochila) {
    if(temp <= myMochila[key]){
        temp = myMochila[key];
        ind = Number(key);
    }  
}
console.log('temp:', temp, 'ind:', ind);
console.log(myMochila);

// var nuevoArreglo = [];
// for (const key in myMochila) {
//                                 //key value
//     let value = myMochila[key]; //frecuencia
//     for (let index = 0; index < value; index++) {
//         nuevoArreglo.push(Number(key));        
//     }
// }
// nuevoArreglo.reverse();
// console.log(nuevoArreglo);

var arreglo_test1 = [6,5,3,2,1,4,100,999];

arreglo_test1.sort((a,b) => {
    if(a%2 == b%2) return a-b;
    if(a%2 > b%2) return -1;
    return 1;
})
//console.log(arreglo_test1);

function ordenarPorFrecuencia(arr) {
    // Paso 1: Contar la frecuencia de cada número
    const frecuencia = {};
    arr.forEach(num => {
      frecuencia[num] = (frecuencia[num] || 0) + 1;
    });
  
    // Paso 2: Ordenar los números según su frecuencia de mayor a menor
    const numerosOrdenados = Object.keys(frecuencia).sort((a, b) => { 
        if(b>a) return frecuencia[a] - frecuencia[b];
        return frecuencia[b] - frecuencia[a]});
  
    // Paso 3: Aplicar el ordenamiento al arreglo original
    const resultado = [];
    numerosOrdenados.forEach(num => {
      const cantidad = frecuencia[num];
      for (let i = 0; i < cantidad; i++) {
        resultado.push(parseInt(num, 10));
      }
    });
  
    return resultado;
  }
  
  // Ejemplo de uso
  const arregloOriginal = [4, 2, 4, 8, 3, 2, 4, 5, 8, 5, 4];
  const arregloOrdenado = ordenarPorFrecuencia(arregloOriginal);
 // console.log(arregloOrdenado);
 function sortIt(arr) {
    // Create a copy of the original array to avoid modifying it
    const newArr = arr.slice();
  
    // Sort according to the number of elements (in ascending order)
    newArr.sort((a, b) => {
      const countA = arr.filter((element) => element === a).length;
      const countB = arr.filter((element) => element === b).length;
  
      if (countA !== countB) {
        return countA - countB; // Sort by the number of elements
      } else {
        return b - a; // If the same number of elements, sort by number values (in descending order)
      }
    });
  
    return newArr;
  }
  
  // Example usage:
  const originalArray = [3, 1, 2, 3, 1, 2, 4, 4];
  const sortedArray = sortIt(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Sorted Array:", sortedArray);
  


  function sortIt(arr) {
    // Create a copy of the original array to avoid modifying it
    const newArr = arr.slice();
  
    // Sort according to the number of elements (in ascending order)
    newArr.sort((a, b) => {
      const countA = arr.filter((element) => element === a).length;
      const countB = arr.filter((element) => element === b).length;
  
      if (countA !== countB) {
        return countA - countB; // Sort by the number of elements
      } else {
        return b - a; // If the same number of elements, sort by number values (in descending order)
      }
    });
  
    return newArr;
  }
  
  // Example usage:
  const originalArray = [3, 1, 2, 3, 1, 2, 4, 4];
  const sortedArray = sortIt(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Sorted Array:", sortedArray);
  