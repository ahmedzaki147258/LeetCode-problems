function minOperations(nums: number[], k: number): number {
    return nums.reduce((a, b) => a + b, 0) % k;
};