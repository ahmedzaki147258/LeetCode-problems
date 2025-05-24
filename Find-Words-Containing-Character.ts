function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((res: number[], w: string, idx: number)=> {
        if(w.includes(x)) res.push(idx)
        return res;
    }, []);
};