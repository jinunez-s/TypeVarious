function fibo(n) {
    var c = [0,1];
    if(n === 0) return 0;
    for (let index = 2; index <= n; index++) {
        let nextNum = c[index - 1] + c[index-2];
        c.push(nextNum)
    }

  return c[(c.length)-1];
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));


const fiboWithYT = (n, memo ={}) => {
  if( n in memo) return memo[n];
  if( n == 0 ) return 0;
  if( n == 1 ) return 1;
  memo[n] = fiboWithYT(n - 1, memo) + fiboWithYT(n -2, memo);
  return memo[n];
}

console.log(fiboWithYT(0));