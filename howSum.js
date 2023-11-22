const howSum = (m, n) => {

    if(m === 0) return [];
    if(m < 0 ) return null;
    if(typeof n == 'number') return false;  

    for (let num of n) {
        const remainder = m - num;
        const remainderResult = howSum(remainder, n);
        if(remainderResult !== null){
            return [...remainderResult, num];
        }
    }
    return null;
}
console.log(howSum(300,[7,15]));