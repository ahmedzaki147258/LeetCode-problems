1/**
2 * @param {number[]} candyType
3 * @return {number}
4 */
5var distributeCandies = function(candyType) {
6    return Math.min(candyType.length/2, Array.from(new Set(candyType)).length)
7};