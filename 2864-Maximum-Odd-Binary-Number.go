func maximumOddBinaryNumber(s string) string {
    count_0,count_1:=0,0;
	for _, num:=range s {
		if num=='1' {count_1++} else {count_0++}
	}
	return strings.Repeat("1", count_1-1)+strings.Repeat("0", count_0)+"1";
}