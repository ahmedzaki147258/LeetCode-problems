function maximumNumberOfStringPairs(words: string[]): number {
    const n = words.length;
    for (let i = 0; i < n; i++) {
        if(words[i][0]>words[i][1]){
            words[i] = words[i][1]+words[i][0];
        }
    }
    const set = new Set(words)
    return n - set.size;
};