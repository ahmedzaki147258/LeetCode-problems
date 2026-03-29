1function recoverOrder(order: number[], friends: number[]): number[] {
2    const set = new Set(friends);
3    const res: number[] = [];
4    for (const num of order) {
5        if (set.has(num)) res.push(num);
6    }
7    return res;
8};