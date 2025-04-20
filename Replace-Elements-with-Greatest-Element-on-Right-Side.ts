function replaceElements(arr: number[]): number[] {
    let max = -1;
    const n = arr.length;
    const res: number[] = [];
    for (let i = n-1; i >= 0; i--) {
        res[i] = max;
        if(max<arr[i]) max = arr[i];
    }
    return res;
};
