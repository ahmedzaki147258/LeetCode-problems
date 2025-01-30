function differenceOfSum(nums: number[]): number {
    const sumOfArray = nums.reduce((a,b)=>a+b);
    const sumOfDigits = nums.join("").split("").map(e=>+e).reduce((a,b)=>a+b);
    return Math.abs(sumOfArray-sumOfDigits);
};