function subarraySum(nums: number[]): number {
    let res=0;
    const n=nums.length;
    for (let i=0;i<n;i++) {
        let subCnt=0;
        const start=Math.max(0, i-nums[i]);
        for (let j=start;j<=i;j++) {
            subCnt+=nums[j];
        }
        res+=subCnt;
    }
    return res;
};