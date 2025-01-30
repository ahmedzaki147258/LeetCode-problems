function decompressRLElist(nums: number[]): number[] {
    const res: number[]=[], n=nums.length;
    for (let i=0;i<n;i+=2){
        for (let j=0;j<nums[i];j++) {
            res.push(nums[i+1]);
        }
    }
    return res;
};