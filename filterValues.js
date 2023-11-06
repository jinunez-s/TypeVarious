function filterDuplicates(arr){
    return arr.filter((value, index, self) =>{
        return self.indexOf(value) === index;
    })
}

const example = [9, 1,2,2,2,2,3,4,5];
const uniqueArray = filterDuplicates(example)
console.log(uniqueArray);