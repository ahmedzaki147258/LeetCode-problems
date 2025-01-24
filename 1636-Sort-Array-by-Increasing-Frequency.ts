function frequencySort(nums: number[]): number[] {
    const n=nums.length;
    let map = new Map<number, number>();
    const res: number[] = [];
    for (let num of nums) {
        map.set(num, (map.get(num) ?? 0)+1);
    }

    map=new Map([...map.entries()].sort((a,b)=>a[1]-b[1]));
    map=new Map(Array.from(map.entries()).sort((a,b)=>{
        if(a[1]==b[1]) {
        return b[0]-a[0];
        }
        return a[1]-b[1];
    }));

    map.forEach((k,v)=>{
        for(let i=0;i<k;i++) res.push(v)
    });
    return res;
};