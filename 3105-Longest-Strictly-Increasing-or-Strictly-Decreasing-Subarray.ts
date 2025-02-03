function longestMonotonicSubarray(nums: number[]): number {
    let max=0, min=0, local_min=0, local_max=0;
    for (let i=1;i<nums.length;i++) {
        if(nums[i-1]<nums[i]) local_max++;
        else local_max=0;
        max= local_max>max ? local_max : max;

        if(nums[i-1]>nums[i]) local_min++;
        else local_min=0;
        min= local_min>min ? local_min : min;
    }
    return Math.max(max, min)+1;
};