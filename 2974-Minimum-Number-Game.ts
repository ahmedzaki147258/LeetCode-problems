function numberGame(nums: number[]): number[] {
    nums.sort((a,b)=>a-b);
    const res: number[]=[], n=nums.length;
    for (let i=0;i<n;i+=2) {
        res.push(nums[i+1]);
        res.push(nums[i]);
    }
    return res;
};