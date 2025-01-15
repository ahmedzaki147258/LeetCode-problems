function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = [];
    const maxCandies = Math.max(...candies);
    candies.forEach((candy)=>{
        if(candy+extraCandies>=maxCandies) res.push(true);
        else res.push(false);
    });
    return res;
};