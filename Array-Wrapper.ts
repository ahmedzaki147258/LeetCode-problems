1class ArrayWrapper {
2    nums: number[];
3
4    constructor(nums: number[]) {
5        this.nums = nums;
6    }
7    
8    valueOf(): number {
9        return this.nums.reduce((a: number, b: number) => a + b, 0);
10    }
11    
12    toString(): string {
13        return '[' + this.nums.join(",") + ']';
14    }
15};
16
17/**
18 * const obj1 = new ArrayWrapper([1,2]);
19 * const obj2 = new ArrayWrapper([3,4]);
20 * obj1 + obj2; // 10
21 * String(obj1); // "[1,2]"
22 * String(obj2); // "[3,4]"
23 */