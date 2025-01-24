function findShortestSubArray(nums: number[]): number {
    let n=nums.length;
    type value = {count: number, firstIndex: number, lastIndex: number}
    const ht = new Map<number, value>();
    for(let i=0;i<n;i++){
        if(ht.get(nums[i])){
        const v: value= ht.get(nums[i])!;
            ht.set(nums[i], {count: v.count+1, firstIndex: v.firstIndex, lastIndex: i});
        } else {
            ht.set(nums[i], {count: 1, firstIndex: i, lastIndex: i});
        }
    }

    let res: value[] = Array.from(ht.values());
    const maxCount=res.reduce((a,b)=>Math.max(a,b.count), 0);
    res=res.filter(obj=>obj.count==maxCount);
    n=res.length;
    let minValue=Number.MAX_VALUE;
    for(let i=0;i<n;i++){
        if(res[i].lastIndex-res[i].firstIndex+1<minValue) {
            minValue = res[i].lastIndex - res[i].firstIndex + 1;
        }
    }
    return minValue;
};