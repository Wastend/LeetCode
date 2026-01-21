/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n === 0)
    return 0
  if (n === 1 || n === 2)
    return 1

  const dp = Array({length: n}).fill(0)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
  }
  return dp[n]
};

const data = [
  {n: 4},
  {n: 5},
  {n: 25}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + tribonacci(item.n))
})