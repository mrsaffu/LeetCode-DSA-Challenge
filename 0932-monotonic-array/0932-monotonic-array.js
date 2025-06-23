/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
 let isMonotonicInc = true;
 let isMonotonicDec = true;

 for(let i=1; i<nums.length; i++){
    if(nums[i]<nums[i-1]){
        isMonotonicInc = false;
    }
    if(nums[i]>nums[i-1]){
        isMonotonicDec = false;
    }
 }
  return isMonotonicInc || isMonotonicDec
};