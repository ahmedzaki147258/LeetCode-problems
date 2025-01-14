/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('');
    for (let i=0; i<arr.length; i+=2*k) {
        let l=i, r=i+k-1;
        while (l<r){
            [arr[r], arr[l]] = [arr[l], arr[r]];
            l++; r--;
        }
    }
    return arr.join('');
};