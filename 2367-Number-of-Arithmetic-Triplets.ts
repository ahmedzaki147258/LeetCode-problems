function arithmeticTriplets(nums: number[], diff: number): number {
    let cnt=0;
    const set=new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if(set.has(nums[i]+diff) && set.has(nums[i]+diff*2)) cnt++;
    }
    return cnt;
};