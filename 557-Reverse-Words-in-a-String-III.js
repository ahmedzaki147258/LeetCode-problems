/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arrayOfWords=s.split(\ \);
    for(let i=0;i<arrayOfWords.length;i++){
        const arr=arrayOfWords[i].split(\\);
        const n=arr.length;
        for(let i=0;i<n/2;i++){
            [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]]
        }
        arrayOfWords[i] = arr.join(\\);
    }
    return arrayOfWords.join(\ \);
};