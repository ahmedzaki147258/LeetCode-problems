/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let inx :number = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==0){
            nums[inx]=nums[i];
            inx++;
        }
    }
    
    for (let i = inx; i < nums.length; i++) {
        nums[i]=0;
    }
};