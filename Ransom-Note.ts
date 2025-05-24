function canConstruct(ransomNote: string, magazine: string): boolean {
    const n = magazine.length;
    const map = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        map.set(magazine[i], ((map.get(magazine[i])) ?? 0) + 1);
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if(!map.has(ransomNote[i]) || map.get(ransomNote[i])! < 1 ) return false;
        else map.set(ransomNote[i], (map.get(ransomNote[i]))! - 1);
    }
    return true;
};