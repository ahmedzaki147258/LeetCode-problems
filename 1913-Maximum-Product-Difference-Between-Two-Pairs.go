func maxProductDifference(nums []int) int {
    n:=len(nums);
	slices.Sort(nums);
	return nums[n-2]*nums[n-1]-nums[0]*nums[1];
    
    // min1,min2,max1,max2,n:=math.MaxInt,math.MaxInt,math.MinInt,math.MinInt,len(nums);
	// for i:=0;i<n;i++ {
	// 	if max1<nums[i] {
	// 		max2=max1
	// 		max1=nums[i]
	// 	} else if max2<nums[i] {
	// 		max2=nums[i]
	// 	}

	// 	if min1>nums[i] {
	// 		min2=min1
	// 		min1=nums[i]
	// 	} else if min2>nums[i] {
	// 		min2=nums[i]
	// 	}
	// }
	// return max1*max2-min1*min2;
}