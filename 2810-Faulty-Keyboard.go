func finalString(s string) string {
    n :=len(s);
	res :="";
	for i:=0;i<n;i++ {
		if s[i]=='i' {
			res=reverse(res, len(res));
		} else {
			res=fmt.Sprintf("%s%s", res, string(s[i]));
		}
	}
	return res
}
func reverse(s string, n int) string {
	res :=[]rune(s);
	for i,j :=0,n-1; i<j; i,j =i+1,j-1 {
		res[i], res[j] = res[j], res[i]
	}
	return string(res);
}