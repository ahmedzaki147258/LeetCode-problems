/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const arr=s.split("");
    const n=arr.length;
    const map = new Map();
    for(let i=0;i<n;i++){
        if(arr[i].charCodeAt(0)>=65&&arr[i].charCodeAt(0)<=90) map.set(i, arr[i]);
        else if(arr[i].charCodeAt(0)>=97&&arr[i].charCodeAt(0)<=122) map.set(i, arr[i]);
    }

    const entries = Array.from(map.entries());
    const n2 = entries.length;
    for(let i=0;i<n2;i++){
        arr[entries[i][0]] = entries[n2-i-1][1];
    }
    return arr.join("");
};