function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const n = s.length;
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        map1.set(s[i], (map1.get(s[i]) || 0) +1);
        map2.set(t[i], (map2.get(t[i]) || 0) +1);
    }
    for(const [key, cnt] of map1){
        if(map2.get(key)!==cnt) return false;
    }
    return true;
};