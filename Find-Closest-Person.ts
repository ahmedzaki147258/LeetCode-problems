1function findClosest(x: number, y: number, z: number): number {
2    const firstDiff = Math.abs(x - z);
3    const secondDiff = Math.abs(y - z);
4
5    if (firstDiff < secondDiff) return 1;
6    else if (firstDiff > secondDiff) return 2;
7    else return 0;
8};