function minimumSum(num: number): number {
    const res: string[]=num.toString().split("").map(n=>+n).sort((a,b)=>a-b).map(n=>n.toString());
    return Number.parseInt(res[0]+res[2])+Number.parseInt(res[1]+res[3]);
};