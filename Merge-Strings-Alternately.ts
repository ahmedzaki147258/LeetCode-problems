function mergeAlternately(word1: string, word2: string): string {
    let res = "";
    const n = Math.min(word1.length, word2.length);
    for (let i = 0; i < n; i++) {
        res += word1[i];
        res += word2[i];
    }
    res+=word1.slice(n);
    res+=word2.slice(n);
    return res;
};