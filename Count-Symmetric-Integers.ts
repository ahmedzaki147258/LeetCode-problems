function countSymmetricIntegers(low: number, high: number): number {
    let cnt = 0;
    for (let i = low; i <= high; i++) {
        const array = i.toString().split("");
        if(array.length % 2 !== 0) continue;
        const length = array.length / 2;
        const sumOfFirstHalf = array.slice(0, length).reduce((a, b)=>a + +b, 0);
        const sumOfSecondHalf = array.slice(length).reduce((a, b)=>a + +b, 0);
        if(sumOfFirstHalf === sumOfSecondHalf) cnt++;
    }
    return cnt;
};