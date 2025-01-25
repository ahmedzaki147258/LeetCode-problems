function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for (let i=0;i<k;i++) {
    const minIndex=nums.indexOf(Math.min(...nums));
        nums[minIndex]*=multiplier;
    }
    return nums;
    
    /****/
    // const priorityQueue=nums.map((value, index)=>[index, value]);
    // priorityQueue.sort((a,b)=>a[1]-b[1]);
    // for (let i=0;i<k;i++) {
    //   const minValue=priorityQueue.shift();
    //   minValue![1]*=multiplier;
    //   priorityQueue.push(minValue!);
    //   priorityQueue.sort((a,b)=>a[1]-b[1])
    // }
    // priorityQueue.sort((a,b)=>a[0]-b[0]);
    // return priorityQueue.map((v,i)=>v[1]);
};