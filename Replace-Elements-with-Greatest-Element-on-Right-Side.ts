function replaceElements(arr: number[]): number[] {
    let max: number = -1;
    const n: number = arr.length;
    const res: number[] = [];
    for (let i: number = n-1; i >= 0; i--) {
        res[i] = max;
        if(max < arr[i]) max = arr[i];
    }
    return res;
};
