1function findWords(words: string[]): string[] {
2    const fristRow = "qwertyuiop";
3    const firstArr = fristRow.split("");
4
5    const secondRow = "asdfghjkl";
6    const secondArr = secondRow.split("");
7
8    const thirdRow = "zxcvbnm";
9    const thirdArr = thirdRow.split("");
10
11    const res: string[] = [];
12    for (const word of words) {
13        if (word.toLowerCase().split("").every(w => firstArr.includes(w))) res.push(word);
14        else if (word.toLowerCase().split("").every(w => secondArr.includes(w))) res.push(word);
15        else if (word.toLowerCase().split("").every(w => thirdArr.includes(w))) res.push(word);
16    }
17    return res;
18};