function lastStoneWeight(stones: number[]): number {
    while(stones.length>1){
        stones.sort((a,b)=>b-a);
        if(stones[0]===stones[1]){
            stones.shift();
            stones.shift();
        } else {
            const diff=stones[0]-stones[1];
            stones.shift();
            stones[0]=diff;
        }
    }
    return stones.length===1 ? stones[0] : 0;
};