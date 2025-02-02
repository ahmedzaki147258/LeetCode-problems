function isIsomorphic(s: string, t: string): boolean {
    const map1=new Map<string,string>();
    const map2=new Map<string,string>();
    for(let i=0;i<s.length;i++){
        if(map1.has(s[i])){
            if(map1.get(s[i])!==t[i]) return false;
        } else {
            map1.set(s[i], t[i]);
        }

        if(map2.has(t[i])){
            if(map2.get(t[i])!==s[i]) return false;
        } else {
            map2.set(t[i], s[i]);
        }
    }
    return true;
};