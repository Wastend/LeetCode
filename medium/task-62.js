/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m - 1][n - 1]
};

const data = [
  {m: 3, n: 7},
  {m: 3, n: 2}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + uniquePaths(item.m, item.n))
})