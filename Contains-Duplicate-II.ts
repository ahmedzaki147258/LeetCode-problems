function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (j-i>k) break;
            else if(nums[i] === nums[j]) return true;
        }
    }
    return false;
};