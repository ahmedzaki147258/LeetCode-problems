class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);
        int n=nums.length;
        double average=Double.MAX_VALUE;
        for(int i=0;i<n/2;i++){
            if((nums[i]+nums[n-1-i])/2.0 < average)
                average=(nums[i]+nums[n-1-i])/2.0;
        }
        return average;
    }
}