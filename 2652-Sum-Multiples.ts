function sumOfMultiples(n: number): number {
    let res=0;
    for(let i=1;i<=n;i++){
        if(i%3===0) res+=i;
        else if(i%5===0) res+=i;
        else if(i%7===0) res+=i;
    }
    return res;
};