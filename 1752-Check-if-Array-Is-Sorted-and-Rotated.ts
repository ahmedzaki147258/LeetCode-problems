function check(nums: number[]): boolean {
    let cnt=0;
    const n=nums.length;
    for (let i=0;i<n;i++) {
        if(nums[i]>nums[(i+1)%n]) cnt++
    }
    return cnt<=1;
};