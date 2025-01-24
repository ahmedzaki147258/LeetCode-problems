function stableMountains(height: number[], threshold: number): number[] {
    const n=height.length, res: number[]=[];
    for (let i=1;i<n;i++) {
        if(height[i-1]>threshold) res.push(i);
    }
    return res;
};