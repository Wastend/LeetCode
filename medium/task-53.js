/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = Array(nums.length + 1).fill(0);
  dp[0] = nums[0]
  let maxNumber = nums[0]
  for (let index = 1; index < nums.length; index++) {
    dp[index] = Math.max(dp[index - 1] + nums[index], nums[index]);
    maxNumber = Math.max(dp[index], maxNumber);
  }
  return maxNumber
};

const data = [
  {arr: [-2,1,-3,4,-1,2,1,-5,4]},
  {arr: [1]},
  {arr: [5,4,-1,7,8]}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + maxSubArray(item.arr))
})