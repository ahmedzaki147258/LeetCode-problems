class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        bubbleSort(nums);
        // Arrays.sort(nums);
        List<Integer> result = new ArrayList<>();
        for(int i=0;i<nums.length;i++){
            if(nums[i]==target) result.add(i);
        }
        return result;
    }
    public void bubbleSort(int[] nums){
        int n=nums.length;
        for(int i=0;i<n;i++){
            for(int j=0;j<n-1-i;j++){
                if(nums[j]>nums[j+1]){
                    nums[j]+=nums[j+1];
                    nums[j+1]=nums[j]-nums[j+1];
                    nums[j]-=nums[j+1];
                }
            }
        }
    }
}