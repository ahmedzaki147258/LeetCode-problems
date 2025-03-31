function countAsterisks(s: string): number {
    let cnt = 0;
    const arr: string[] = s.split('|');
    for (let i = 0; i < arr.length; i+=2) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === '*') cnt++;
        }
    }
    return cnt;
};