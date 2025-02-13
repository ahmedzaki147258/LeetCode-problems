func clearDigits(s string) string {
    n,stack:=len(s),[]string{};
	for i:=0;i<n;i++{
		if s[i]>=48 && s[i]<=57 {
			stack=stack[:len(stack)-1];
		} else {
			stack=append(stack, string(s[i]));
		}
	}
	return strings.Join(stack, "");
}