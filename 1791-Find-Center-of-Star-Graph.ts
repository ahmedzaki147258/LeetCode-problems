function findCenter(edges: number[][]): number {
    const n1=edges[0][0], n2=edges[0][1];
    if(edges[1][0]===n1 || edges[1][1]===n1) return n1;
    else if(edges[1][0]===n2 || edges[1][1]===n2) return n2;
    return 0;
};