function sumOddLengthSubarrays(arr: number[]): number {
    let res=0;
    const n=arr.length;
    for (let i=0;i<n;i++) {
        res+=((Math.ceil((i+1)*(n-i)/2))*arr[i]);
    }
    return res;
};