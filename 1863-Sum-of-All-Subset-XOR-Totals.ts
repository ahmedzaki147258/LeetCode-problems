function subsetXORSum(nums: number[]): number {
    let cnt=0;
    const subsets: number[][] = [[]];
    for (const el of nums) {
        const last = subsets.length;
        for (let i = 0; i < last; i++) {
        subsets.push([...subsets[i], el]);
        }
    }

    for (const subset of subsets) {
        cnt += subset.reduce((a,b)=>a^b, 0)
    }
    return cnt;
};