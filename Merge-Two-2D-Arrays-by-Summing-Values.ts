function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const map = new Map<number, number>();
    while (nums1.length > 0 || nums2.length > 0) {
        if (nums1.length > 0 && (nums2.length === 0 || nums1[0][0] < nums2[0][0])) {
            map.set(nums1[0][0], nums1[0][1]);
            nums1.shift();
        } else if (nums2.length > 0 && (nums1.length === 0 || nums1[0][0] > nums2[0][0])) {
            map.set(nums2[0][0], nums2[0][1]);
            nums2.shift();
        } else if (nums1.length > 0 && nums2.length > 0 && nums1[0][0] === nums2[0][0]) {
            map.set(nums1[0][0], nums1[0][1] + nums2[0][1]);
            nums1.shift();
            nums2.shift();
        }
    }
    return Array.from(map.entries());
};