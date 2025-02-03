function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    let answer1=0, answer2=0;
    const set1=new Set<number>(nums1), set2=new Set<number>(nums2);
    for (let i=0;i<nums1.length;i++) {
        if(set2.has(nums1[i])) answer1++;
    }
    for (let i=0;i<nums2.length;i++) {
        if(set1.has(nums2[i])) answer2++;
    }
    return [answer1, answer2];
};