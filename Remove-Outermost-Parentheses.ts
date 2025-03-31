function removeOuterParentheses(s: string): string {
    const res: string[] = [];
    const arr: string[] = [];
    let local: string[] = [];
    for (const ch of s) {
        local.push(ch);
        if(ch === '('){
            if(arr.length === 0){
                local = [];
            }
            arr.push(ch);
        } else {
            arr.pop();
            if(arr.length === 0){
                local.pop();
                res.push(...local);
                local = [];
            }
        }
    }
    return res.join("");
};