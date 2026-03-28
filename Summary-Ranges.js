1/**
2 * @param {number[]} nums
3 * @return {string[]}
4 */
5var summaryRanges = function(nums) {
6    const result = [];
7    if (nums.length === 0) return result;
8    if (nums.length === 1) return [nums[0].toString()];
9
10    let i = 0;
11    let start = nums[0];
12    if (start + 1 !== nums[1]) {
13        result.push(start.toString());
14        i = 1;
15        start = nums[i];
16    }
17    let lastElement;
18    let lastIndex = nums.length;
19    if (nums[nums.length - 1] - nums[nums.length - 2] !== 1) {
20        lastElement = nums[nums.length - 1];
21        lastIndex--;
22    }
23
24    for (i; i < lastIndex; i++) {
25        if (nums[i] + 1 === nums[i+1]){
26            continue;
27        } else {
28            if (start === nums[i]) result.push(start.toString());
29            else result.push(`${start}->${nums[i]}`);
30            start = nums[i+1];
31        }
32    }
33
34    if (lastElement) result.push(lastElement.toString());
35    return result;
36};