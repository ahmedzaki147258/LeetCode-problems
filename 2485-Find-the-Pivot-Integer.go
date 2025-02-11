func pivotInteger(n int) int {
   	sum := n*(n+1)/2;
	sqr := int(math.Sqrt(float64(sum)));
	if sqr*sqr==sum {
		return sqr
	} else {
		return -1
	}

    // for i:=1;i<=n;i++{
	// 	prefix:=0; suffix:=0;
	// 	for j:=1;j<=i;j++{
	// 		prefix+=j;
	// 	}
	// 	for j:=n;j>=i;j--{
	// 		suffix+=j;
	// 	}
	// 	if prefix==suffix {return i;}
	// }
    // return -1;
}