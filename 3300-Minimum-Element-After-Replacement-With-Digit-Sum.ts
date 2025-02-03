function minElement(nums: number[]): number {
    return Math.min(...nums.map(String).map(e=>e.split("").map(e=>+e).reduce((a,b)=>a+b)));
};