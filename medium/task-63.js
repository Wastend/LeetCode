/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] === 1)
    return 0

  const dp = Array.from({ length: obstacleGrid.length }, () => Array(obstacleGrid[0].length).fill(0));
  dp[0][0] = 1

  for (let i = 0; i < obstacleGrid.length; i++) {
    if(obstacleGrid[i][0])
      break
    else
      dp[i][0] = 1
  }

  for (let j = 0; j < obstacleGrid[0].length; j++) {
    if(obstacleGrid[0][j])
      break
    else
      dp[0][j] = 1
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if(obstacleGrid[i][j])
        obstacleGrid[i][j] = 0
      else
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};

const data = [
  [[0,0,0],[0,1,0],[0,0,0]],
  [[0,1],[0,0]]
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + uniquePathsWithObstacles(item))
})