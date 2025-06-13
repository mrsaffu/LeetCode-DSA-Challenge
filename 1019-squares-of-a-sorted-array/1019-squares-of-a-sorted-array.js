/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArray =[]
    let left_pointer =0;
    let right_pointer = nums.length-1;
    for(let i=nums.length-1; i>=0; i--){
        let left_squard = nums[left_pointer]*nums[left_pointer];
        let right_squard = nums[right_pointer]*nums[right_pointer];

        if(left_squard>right_squard){
            newArray[i]=left_squard;
            left_pointer++
        }else{
            newArray[i]=right_squard;
            right_pointer--
        }

    }
    return newArray
    
};