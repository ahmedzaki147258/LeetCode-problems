func isAcronym(words []string, s string) bool {
    n:=len(words)
    if n!=len(s) {return false}
	for i:=0;i<n;i++{
		if words[i][0]!=s[i] {return false}
	}
	return true;
}