function diagonalSum(mat: number[][]): number {
    let res=0;
    const n=mat.length;
    for(let i=0;i<n;i++){
        res+=mat[i][i];
        res+=mat[i][n-i-1];
    }
    if(n%2==1) res-=mat[Math.floor(n/2)][Math.floor(n/2)];
    return res;
};