function sortPeople(names: string[], heights: number[]): string[] {
    const n=names.length;
    for (let i=0;i<n-1;i++) {
        for (let j=0;j<n-i-1;j++) {
            if(heights[j]<heights[j+1]){
                [heights[j], heights[j+1]] = [heights[j+1], heights[j]];
                [names[j], names[j+1]] = [names[j+1], names[j]];
            }
        }
    }
    return names;
};