1const alternatingSum = (nums: number[]): number => nums.reduce((a: number, b: number, i: number) => i % 2 === 0 ? a + b : a - b);
2