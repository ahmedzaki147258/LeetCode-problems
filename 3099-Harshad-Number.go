func sumOfTheDigitsOfHarshadNumber(x int) int {
    sum,tmp:=0,x;
	for tmp>0{
		sum+=tmp%10;
		tmp/=10;
	}
	if x%sum == 0 { return sum } else { return -1 }
}