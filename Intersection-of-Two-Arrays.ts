function intersection(nums1: number[], nums2: number[]): number[] {
    return Array.from<number>(new Set(nums1.filter(num => nums2.includes(num))));
};