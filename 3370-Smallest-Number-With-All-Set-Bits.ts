function smallestNumber(n: number): number {
    let i=1
    do{
        if(Math.pow(2, i)-1 >= n) return Math.pow(2, i)-1;
        i++;
    }while(true);
};