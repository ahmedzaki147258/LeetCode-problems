function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let res=0;
    const n=nums.length;
    for (let i=0;i<n;i++) {
        const numOfOnes=i.toString(2).split("").reduce((a,b)=>+a+(+b),0);
        if(numOfOnes===k) res+=nums[i];
    }
    return res;
};