

function fibo(n) {
    var c = [0,1];
    for (let index = 2; index <= n; index++) {
        let nextNum = c[index - 1] + c[index-2];
        c.push(nextNum)
    }

  return c[(c.length)-1];
}

console.log(fibo(6));


const fiboWithYT = (n, memo ={}) => {
  if( n in memo) return memo[n];
  if( n <= 2 ) return 1;
  memo[n] = fiboWithYT(n - 1, memo) + fiboWithYT(n -2, memo);
  return memo[n];
}

console.log(fiboWithYT(6));