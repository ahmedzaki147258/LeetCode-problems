function decode(encoded: number[], first: number): number[] {
    const n: number=encoded.length, res: number[] = [first];
    for (let i=0;i<n;i++) {
        res.push(encoded[i]^res[i]);
    }
    return res;
};