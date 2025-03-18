/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 0; j < nums.length-1-i; j++) {
            if(nums[j]===0) {
                nums[j]=nums[j+1];
                nums[j+1]=0;
            }
        }
    }
};