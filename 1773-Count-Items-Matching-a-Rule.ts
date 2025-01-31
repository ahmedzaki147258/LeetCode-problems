function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let cnt=0;
    for (let i=0;i<items.length;i++) {
        if(ruleKey==="type"){
            if(ruleValue===items[i][0]) cnt++;
        } else if(ruleKey==="color"){
            if(ruleValue===items[i][1]) cnt++;
        } else if(ruleKey==="name"){
            if(ruleValue===items[i][2]) cnt++;
        }
    }
    return cnt;
};