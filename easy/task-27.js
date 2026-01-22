/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const data = [
  {arr: [3,2,2,3], val: 3},
  {arr: [0,1,2,2,3,0,4,2], val: 2}
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + removeElement(item.arr, item.val))
})