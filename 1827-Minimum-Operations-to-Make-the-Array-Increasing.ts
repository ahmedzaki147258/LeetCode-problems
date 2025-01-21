function minOperations(nums: number[]): number {
    let count=0;
    const n=nums.length;
    for(let i=1;i<n;i++){
        if(nums[i-1]>=nums[i]){
            count += (nums[i-1]-nums[i]+1);
            nums[i]=nums[i-1]+1;
        }
    }
    return count;
};