function maxDepth(s: string): number {
    let res=0;
    const stackArr: string[]=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') stackArr.push(s[i])
        else if(s[i]===')') {
            res=Math.max(stackArr.length, res);
            stackArr.pop();
        }
    }
    return res;
};