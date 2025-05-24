function maxFreqSum(s: string): number {
    const vowel = ['a', 'e', 'i', 'u', 'o'];
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if(vowel.includes(s[i])) map1.set(s[i], (map1.get(s[i]) ?? 0 )+1);
        else map2.set(s[i], (map2.get(s[i]) ?? 0 )+1);
    }
    const max1 = map1.size > 0 ? Math.max(...Array.from(map1.values())) : 0;
    const max2 = map2.size > 0 ? Math.max(...Array.from(map2.values())) : 0;
    return max1 + max2;
};