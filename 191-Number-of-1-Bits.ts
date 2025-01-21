function hammingWeight(n: number): number {
    return n.toString(2).split('').reduce((a, b)=>a+(+b),0);
};