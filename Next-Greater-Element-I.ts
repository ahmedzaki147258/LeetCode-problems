1function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
2    const res: number[] = [];
3    for (const num of nums1) {
4        const idx = nums2.findIndex((ele: number) => ele === num);
5        if (idx === nums2.length - 1) res.push(-1);
6        for (let i = idx + 1; i < nums2.length; i++) {
7            if (nums2[idx] < nums2[i]) {
8                res.push(nums2[i]);
9                break;
10            } else if (i == nums2.length - 1) {
11                res.push(-1);
12            }
13        }
14    }
15    return res;
16};