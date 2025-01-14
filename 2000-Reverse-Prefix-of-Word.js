/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const n= word.indexOf(ch);
    if(n===-1) return word;
    
    const arr=word.split("");
    for(let i=0;i<=n/2;i++){
        [arr[i], arr[n-i]] = [arr[n-i], arr[i]]
    }
    return arr.join("");
};