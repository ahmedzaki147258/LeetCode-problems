function maxAscendingSum(nums: number[]): number {
    if(nums.length===1) return nums[0];
    let max=0, cnt=nums[0];
    for (let i=1;i<nums.length;i++) {
        if(nums[i-1]<nums[i]){
            cnt+=nums[i];
            max=Math.max(cnt, max);
        } else {
            max=Math.max(cnt, max);
            cnt=nums[i];
        }
    }
    return max;
};