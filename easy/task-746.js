/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = Array({length: cost.length + 1})
  dp[0] = cost[0]
  dp[1] = Math.min(cost[1])

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
  }
  return Math.min(dp[cost.length - 1],dp[cost.length - 2])
};

const data = [
  [10,15,20],
  [1,100,1,1,1,100,1,1,100,1],
  [0,0,0,1]
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + minCostClimbingStairs(item))
})