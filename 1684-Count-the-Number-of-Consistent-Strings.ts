function countConsistentStrings(allowed: string, words: string[]): number {
    let count=0;
    words.forEach((word)=>{
        const wordSize = word.length;
        for(let i=0;i<wordSize;i++){
            if(!allowed.includes(word[i])){
                break;
            }else if(i+1===wordSize){
                count++;
            }
        }
    });
    return count;
};