/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if( n < 2 ) return n
  const dp = Array({length: n}).fill(0)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i-1] + dp[i - 2]
  }
  return dp[n]
};

const data = [
  {n: 2},
  {n: 3},
  {n: 4}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + fib(item.n))
})