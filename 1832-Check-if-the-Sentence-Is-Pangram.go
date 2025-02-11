func checkIfPangram(sentence string) bool {
    n :=len(sentence);
    res := []string{};
	for i:=0;i<n;i++{
		if !slices.Contains(res, string(sentence[i])) {
			res=append(res, string(sentence[i]));
		}
	}
	return len(res)==26;
}