function countPoints(rings: string): number {
    let cnt=0, n=rings.length;
    const map=new Map<string, string[]>();
    for (let i=0;i<n;i+=2) {
        if(map.get(rings[i+1])){
            if(!map.get(rings[i+1])?.includes(rings[i])){
                map.get(rings[i+1])!.push(rings[i]);
            }
        } else {
            map.set(rings[i+1], [rings[i]]);
        }
    }

    return Array.from(map.values()).filter(r=>r.length==3).length;
};