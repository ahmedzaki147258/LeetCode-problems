function largestLocal(grid: number[][]): number[][] {
    const n=grid.length, res: number[][]=Array.from({ length: n-2}, e=>Array.from({length: n-2}));
    for(let i=0;i<=n-3;i++){
        for (let j=0;j<=n-3;j++) {
        let max: number = Number.MIN_VALUE;
        for (let x=i;x<i+3;x++) {
            for (let y=j;y<j+3;y++) {
            if(grid[x][y]>max){
                max=grid[x][y];
            }
            }
        }
        res[i][j]=max;
        }
    }
    return res;
};