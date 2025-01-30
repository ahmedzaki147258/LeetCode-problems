function minOperations(boxes: string): number[] {
    const res: number[]=[], n=boxes.length;
    for (let i=0;i<n;i++) {
        let sum=0
        for (let j=0;j<n;j++) {
            sum+=(Math.abs(i-j)*+boxes[j]);
        }
        res[i]=sum;
    }
    return res;
};