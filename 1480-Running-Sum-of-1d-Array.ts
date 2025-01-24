function runningSum(nums: number[]): number[] {
    let sum=0;
    const n=nums.length;
    const res: number[]=Array.from<number>({ length: n }).fill(0);
    for (let i=0;i<n;i++) {
        sum+=nums[i];
        res[i]=sum;
    }
    return res;
};