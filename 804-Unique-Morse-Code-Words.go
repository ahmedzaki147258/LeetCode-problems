func uniqueMorseRepresentations(words []string) int {
    n:=len(words);
    morse_code := []string{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."}
	res := make(map[string]int);
	for i:=0;i<n;i++{
		code:="";
		word:=words[i];
		wordLen:=len(word);
		for j:=0;j<wordLen;j++{
			code+=morse_code[word[j]-97];
		}
		res[code]=0;
	}
	return len(res);
}