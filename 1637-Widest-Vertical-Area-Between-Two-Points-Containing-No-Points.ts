function maxWidthOfVerticalArea(points: number[][]): number {
    const xAxis=points.map(e=>e[0]);
    xAxis.sort((a,b)=>a-b);
    return xAxis.reduce((prev, curr, idx)=>{
        if(idx===0) return 0;
        return Math.max(prev, Math.abs(curr-xAxis[idx-1]));
    }, 0);
};