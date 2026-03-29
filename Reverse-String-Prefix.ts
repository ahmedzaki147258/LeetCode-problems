1function reversePrefix(s: string, k: number): string {
2    const part1 = s.slice(0, k);
3    const part2 = s.slice(k);
4    return part1.split("").reverse().join("") + part2;
5};