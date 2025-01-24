function subtractProductAndSum(n: number): number {
    const arr: number[] = n.toString().split("").map(n=>+n);
    return arr.reduce((a,b)=>a*b, 1)-arr.reduce((a,b)=>a+b, 0);
};