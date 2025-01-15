function findWordsContaining(words: string[], x: string): number[] {
    const res: number[]=[];
    for (const idx in words) {
        if(words[idx].includes(x)) res.push(parseInt(idx))
    }
    return res;
};