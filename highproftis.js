let testcase = [1,2,3,4,5]
testcase = [2334454, 5]

testcase.sort(function(a,b){
    return a-b;
})

const sellAmount = testcase.pop()
const buyAmount = testcase[0]
console.log(sellAmount, buyAmount);

function highProfits(n){
    n.sort(function(a,b){
        return a-b;
    })

    return [n[0], n.pop()]
}

console.log(highProfits(testcase));

//codewars
function minMax(arr){
    if(arr.length > 0){
      arr.sort(function(a,b){
        return a-b;
      })
      return [arr[0], arr.pop()]
    }else{
      return [arr[0], arr[0]]
    }
  }

console.log(minMax(testcase));