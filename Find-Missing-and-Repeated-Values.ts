function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let missed = 0, duplicate = 0;
    const res = grid.reduce((a, b): number[] => {
        a.push(...b);
        return a;
    }, []).sort();
    for (let i = 0; i < res.length-1; i++) {
        if(res[i] === res[i+1]) {
            duplicate = res[i];
            break;
        }
    }

    for (let i = 1; i <= res.length; i++) {
        if (!res.includes(i)) {
            missed = i;
            break;
        }
    }

    return [duplicate, missed];
};