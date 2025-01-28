function minOperations(nums: number[], k: number): number {
    let res=0;
    const n=nums.length;
    for (let i=0;i<n;i++) {
        if(nums[i]<k) res++;
    }
    return res;
};