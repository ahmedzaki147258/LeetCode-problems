function countDigits(num: number): number {
    let cnt=0;
    const arrOfDigits=Array.from(num.toString()).map(e=>+e);
    for(let i=0;i<arrOfDigits.length;i++){
        if(num%arrOfDigits[i]===0) cnt++;
    }
    return cnt;
};