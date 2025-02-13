func sumOfTheDigitsOfHarshadNumber(x int) int {
    sum:=0;
	for _, ch:=range strconv.Itoa(x){
		num, _ := strconv.Atoi(string(ch));
		sum+=num;
	}
	if x%sum == 0 { return sum } else { return -1 }
}