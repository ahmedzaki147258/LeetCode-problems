1function mapWordWeights(words: string[], weights: number[]): string {
2    const res: string[] = [];
3    for (const word of words) {
4        let sum: number = 0;
5        const arr: string[] = word.split("");
6        for (const ele of arr) {
7            sum += weights[ele.charCodeAt(0) - 97];
8        }
9
10        const idx = (25 - sum % 26 + 97);
11        res.push(String.fromCharCode(idx));
12    }
13    return res.join("");
14};