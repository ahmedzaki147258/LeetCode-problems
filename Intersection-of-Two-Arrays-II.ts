function intersect(nums1: number[], nums2: number[]): number[] {
    let res: number[] = [];
    const map = new Map<number, number>();
    for(const num of nums1){
        map.set(num, (map.get(num) || 0) + 1);
    }
    for(const num of nums2){
        if(map.has(num) && (map.get(num) as number) > 0){
            map.set(num, (map.get(num) as number) - 1);
            res.push(num);
        }
    }
    return res;
};