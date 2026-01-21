/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if( n < 3 ) return n

  const dp = Array({length: n}).fill(0)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i-1] + dp[i - 2]
  }
  return dp[n]
};

const data = [
  {n: 2},
  {n: 3},
  {n: 4},
  {n: 25}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + climbStairs(item.n))
})