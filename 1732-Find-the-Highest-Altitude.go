func largestAltitude(gain []int) int {
    max :=0; n :=len(gain);
    newArray := []int{0};
	for i:=0;i<n;i++{
		newArray = append(newArray, newArray[i]+gain[i]);
		if max<newArray[i+1] {max=newArray[i+1]}
	}
	return max
}