function findPermutationDifference(s: string, t: string): number {
    let cnt=0;
    const n=s.length, arr1=s.split(""), arr2=t.split("");
    for (let i=0;i<n;i++) {
        cnt += Math.abs(i-arr2.findIndex(ch=>ch===arr1[i]));
    }
    return cnt;
};