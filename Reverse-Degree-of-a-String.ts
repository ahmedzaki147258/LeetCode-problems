function reverseDegree(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const idx = 27-(s[i].charCodeAt(0)-96);
        res += (idx * (i+1));
    }
    return res;
};