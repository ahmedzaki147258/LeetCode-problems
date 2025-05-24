function firstUniqChar(s: string): number {
    const n = s.length;
    const map = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        map.set(s[i], ((map.get(s[i])) ?? 0) + 1);
    }
    for (const [k, v] of map) {
        if(v === 1) return s.indexOf(k);
    }
    return -1;
};