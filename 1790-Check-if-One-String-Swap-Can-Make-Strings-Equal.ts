function areAlmostEqual(s1: string, s2: string): boolean {
    const diff1: string[]=[], diff2: string[]=[];
    for (let i=0;i<s1.length;i++) {
        if(s1[i]!==s2[i]) {
            diff1.push(s1[i]);
            diff2.push(s2[i]);
        }
    }
    
    if(diff1.length==1||diff1.length>2) return false;
    else if(diff1.length===2) return diff1[0]===diff2[1] && diff1[1]===diff2[0];
    else return true;
};