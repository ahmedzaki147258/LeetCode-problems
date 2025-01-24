function xorOperation(n: number, start: number): number {
    return Array.from({length: n}, (_,i)=>start + 2*i).reduce((a,b)=>a^b);
};