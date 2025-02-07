function toLowerCase(s: string): string {
    let res="";
    for (let i=0;i<s.length;i++) {
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
            res+=String.fromCharCode(s.charCodeAt(i)+32);
        } else {
            res+=s[i];
        }
    }
    return res;
    // return s.toLowerCase();
};