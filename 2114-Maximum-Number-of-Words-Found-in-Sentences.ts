function mostWordsFound(sentences: string[]): number {
    return sentences.map(s=>s.split(" ").length).reduce((a,b)=>Math.max(a,b));
};