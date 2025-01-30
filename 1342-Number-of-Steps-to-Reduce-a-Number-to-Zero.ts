function numberOfSteps(num: number): number {
    let cnt=0;
    while (num>0){
        cnt++;
        num = num%2!==0 ? num-1 : num/2;
    }
    return cnt;
};