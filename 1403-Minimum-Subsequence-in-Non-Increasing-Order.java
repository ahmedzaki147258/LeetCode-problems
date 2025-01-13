class Solution {
    public List<Integer> minSubsequence(int[] nums) {
        Arrays.sort(nums);
        int sum=0, n=nums.length, total=Arrays.stream(nums).sum();
        List<Integer> list = new ArrayList<>();
        for(int i=n-1;i>=0;i--){
            if(sum>total) return list;
            else {
                total-=nums[i];
                sum+=nums[i];
                list.add(nums[i]);
            }
        }
        return list;
    }
}