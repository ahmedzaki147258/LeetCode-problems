function longestPalindrome(s: string): number {
    let res = 0;
    const arr = s.split("");
    const map = new Map<string, number>();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0 ) + 1);
    }
    let flag = false;
    for(const v of map.values()){
        if(v%2 == 0) {
            res += v;
        } else {
            flag = true;
            res += v - 1;
        }
    }
    if(flag) res++;
    return res;
};