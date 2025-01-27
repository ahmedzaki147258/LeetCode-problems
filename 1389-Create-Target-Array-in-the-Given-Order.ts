function createTargetArray(nums: number[], index: number[]): number[] {
    const n=nums.length;
    const res: number[] = Array.from({length: n});
    for (let i=0;i<n;i++) {
        if(res[index[i]]!==undefined){
            for(let j=n-1;j>=index[i];j--) {
                res[j]=res[j-1];
            }
        }
        res[index[i]]=nums[i];
    }
    return res;
};