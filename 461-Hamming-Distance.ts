function hammingDistance(x: number, y: number): number {
    let binary1=x.toString(2);
    let binary2=y.toString(2);
    const max=Math.max(binary1.length, binary2.length);
    for (let i=binary1.length;i<max;i++) {
        binary1=0+binary1;
    }
    for (let i=binary2.length;i<max;i++) {
        binary2=0+binary2;
    }
    let cnt=0;
    for (let i=0;i<max;i++) {
        if(binary1[i]!==binary2[i]) cnt++;
    }
    return cnt;
};