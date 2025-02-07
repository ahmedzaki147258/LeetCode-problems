function minBitFlips(start: number, goal: number): number {
    let cnt=0;
    let startBinary=start.toString(2), goalBinary=goal.toString(2);
    let startBinaryLength=startBinary.length, goalBinaryLength=goalBinary.length;
    if(startBinaryLength>goalBinaryLength){
        goalBinary="0".repeat(startBinaryLength-goalBinaryLength)+goalBinary;
    } else if (startBinaryLength<goalBinaryLength){
        startBinary="0".repeat(goalBinaryLength-startBinaryLength)+startBinary;
    }

    for(let i=0;i<startBinary.length;i++){
        if(startBinary[i]!==goalBinary[i]) cnt++;
    }
    return cnt;
};