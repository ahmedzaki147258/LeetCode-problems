function heightChecker(heights: number[]): number {
    let res = 0;
    const originalHeights = [...heights];
    heights.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== originalHeights[i]) res++;
    }
    return res;
};