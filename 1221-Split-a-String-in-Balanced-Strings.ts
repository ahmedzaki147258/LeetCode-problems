function balancedStringSplit(s: string): number {
    let cnt: number=0, Lcnt: number=0, Rcnt: number=0;
    const n=s.length;
    for (let i=0;i<n;i++) {
        if(s[i]==="L") Lcnt++;
        else Rcnt++;

        if(Lcnt===Rcnt){
            cnt++;
            Lcnt=Rcnt=0;
        }
    }
    return cnt;
};