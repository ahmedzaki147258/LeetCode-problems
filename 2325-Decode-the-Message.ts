function decodeMessage(key: string, message: string): string {
    let res="";
    key=key.split(" ").join("");
    key=[...new Set(key)].join("");
    const map = new Map<number, string>([...key].map((ch, idx)=>[idx, ch]));
    for (let i=0;i<message.length;i++) {
        if(message[i]===' ') res+=' ';
        else {
            const idx=[...map].find(([_, value]) => value===message[i])!
            res+=String.fromCharCode(97+idx[0]);
        }
    }
    return res;
};