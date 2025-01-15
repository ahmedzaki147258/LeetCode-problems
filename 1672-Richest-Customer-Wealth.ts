function maximumWealth(accounts: number[][]): number {
    let max=0;
    accounts.forEach((account: number[] )=>{
        const sum = account.reduce((a,b)=>a+b, 0);
        if(sum>max) max=sum;
    })
    return max;
};