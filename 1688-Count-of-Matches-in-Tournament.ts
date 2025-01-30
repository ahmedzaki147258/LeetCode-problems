function numberOfMatches(n: number): number {
    let res=0, otherNum=n;
    while (otherNum>1){
        if(otherNum%2===0){
            n=otherNum=otherNum/2;
        } else {
            n=(otherNum-1)/2;
            otherNum=(otherNum-1)/2+1;
        }
        res+=n;
    }
    return res;
};