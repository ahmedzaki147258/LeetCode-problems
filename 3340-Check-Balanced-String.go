func isBalanced(num string) bool {
    even :=0; odd :=0; n :=len(num);
	for i:=0;i<n;i++{
		value, _ := strconv.Atoi(string(num[i]));
		if i%2==0 {
			even+=value
		} else {
			odd+=value
		}
	}
	return even==odd;
}