function transformArray(nums: number[]): number[] {
    const even: number[] = [];
    const odd: number[] = [];
    for (const num of nums) {
        if (num%2==0) even.push(0);
        else odd.push(1);
    }
    return [...even, ...odd];
};