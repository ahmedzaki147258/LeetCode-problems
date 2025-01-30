function truncateSentence(s: string, k: number): string {
    return s.split(" ").filter((_, idx)=>idx<k).join(" ");
};