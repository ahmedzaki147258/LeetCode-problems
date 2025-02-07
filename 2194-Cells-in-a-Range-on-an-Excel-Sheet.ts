function cellsInRange(s: string): string[] {
    const result: string[]=[];
    const firstLetter=s.charCodeAt(0);
    const endLetter=s.charCodeAt(3);
    const start=+s[1];
    const end=+s[4];
    for(let i=firstLetter;i<=endLetter;i++){
        for (let j=start;j<=end;j++) {
            result.push(String.fromCharCode(i)+j);
        }
    }
    return result;
};