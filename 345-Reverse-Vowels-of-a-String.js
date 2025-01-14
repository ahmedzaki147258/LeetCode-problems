/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr=s.split(\\);
    const n=arr.length;
    const map = new Map();
    for(let i=0;i<n;i++){
        if(\aeiouAEIOU\.indexOf(arr[i]) != -1) map.set(i, arr[i]);
    }

    const keys = Array.from(map.keys());
    const values = Array.from(map.values());
    console.log(values)
    const n2 = values.length;
    for(let i=0;i<n2;i++){
        arr[keys[i]] = values[n2-i-1];
    }
    return arr.join(\\);
};