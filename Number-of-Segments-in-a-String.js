1/**
2 * @param {string} s
3 * @return {number}
4 */
5var countSegments = function(s) {
6    s = s.trim();
7    if (!s.length) return 0;
8
9    let res = 0;
10    const arr = s.split(" ");
11    for (let str of arr) {
12        str = str.trim();
13        if (str.length) res++;
14    }
15    return res;
16};