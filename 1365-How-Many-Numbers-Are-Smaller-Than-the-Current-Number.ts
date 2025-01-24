function smallerNumbersThanCurrent(nums: number[]): number[] {
    const n: number=nums.length, res: number[]=Array.from(nums);
    for (let i=0;i<n;i++) {
        let cnt=0;
        for (let j=0;j<n;j++) {
            if(nums[j]<nums[i]) cnt++;
        }
        res[i]=cnt;
    }
    return res;
};