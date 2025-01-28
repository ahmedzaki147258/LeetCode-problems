function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let res=0;
    const n=nums1.length, m=nums2.length;
    for (let i=0;i<n;i++) {
        for (let j=0;j<m;j++) {
            if(nums1[i]%(nums2[j]*k)===0) res++;
        }
    }
    return res;
};