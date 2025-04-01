function minCosts(cost: number[]): number[] {
    for (let i = 1; i < cost.length; i++) {
        cost[i] = Math.min(cost[i-1], cost[i]);
    }
    return cost;
};