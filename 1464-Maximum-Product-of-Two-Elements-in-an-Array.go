func maxProduct(nums []int) int {
    max1:=math.MinInt32; max2:=math.MinInt32; n:=len(nums);
	for i:=0;i<n;i++ {
		if max1<nums[i]{
			max2=max1;
			max1=nums[i];
		} else if max2<nums[i]{
			max2=nums[i];
		}
	}
    return (max1-1)*(max2-1);
}