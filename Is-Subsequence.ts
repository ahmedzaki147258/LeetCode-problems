function isSubsequence(s: string, t: string): boolean {
   for (let i: number = 0; i < s.length; i++) {
        const idx: number = t.indexOf(s[i]);
        if(idx === -1) return false;
        t = t.substring(idx + 1);
    }
    return true;
};