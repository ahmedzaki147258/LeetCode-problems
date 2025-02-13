func maximum69Number (num int) int {
    max,str:=num,strconv.Itoa(num);
	n:=len(str);
	for i:=0;i<n;i++ {
		local := []rune(str)
		if local[i] == '9' {
			local[i] = '6'
		} else {
			local[i] = '9'
		}

		convertNum, _ := strconv.Atoi(string(local))
		if convertNum > max {
			max = convertNum
		}
	}
	return max;
}