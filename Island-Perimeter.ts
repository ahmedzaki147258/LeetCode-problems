function islandPerimeter(grid: number[][]): number {
    let res = 0;
    const row = grid.length;
    for(let i=0;i<row;i++){
        const col = grid[i].length;
        for(let j=0;j<col;j++){
            if(grid[i][j] === 1){
                res += 4;
                if(i>0 && grid[i-1][j] === 1) res--;
                if(i<row-1 && grid[i+1][j] === 1) res--;
                if(j>0 && grid[i][j-1] === 1) res--;
                if(j<col-1 && grid[i][j+1] === 1) res--;
            }
        }
    }
    return res;
};