function cellsInRange(s: string): string[] {
    const result: string[]=[];
    const [firstLetter, start, _, endLetter, end]=s.split("");
    for(let i=firstLetter.charCodeAt(0);i<=endLetter.charCodeAt(0);i++){
        for (let j=+start;j<=+end;j++) {
            result.push(String.fromCharCode(i)+j);
        }
    }
    return result;
};