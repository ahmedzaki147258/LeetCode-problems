func maxProductDifference(nums []int) int {
    min1,min2,max1,max2,n:=math.MaxInt,math.MaxInt,math.MinInt,math.MinInt,len(nums);
	for i:=0;i<n;i++ {
		if max1<nums[i] {
			max2=max1
			max1=nums[i]
		} else if max2<nums[i] {
			max2=nums[i]
		}

		if min1>nums[i] {
			min2=min1
			min1=nums[i]
		} else if min2>nums[i] {
			min2=nums[i]
		}
	}
	return max1*max2-min1*min2;
}