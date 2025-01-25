class Solution {
    public int removeDuplicates(int[] nums) {
          for(int i=0;i<nums.length-1;i++){
            for(int j=0;j<nums.length-i-2;j++){
                if(nums[j] == nums[j+1]) {
                    nums[j] = nums[j+1];
                    nums[j+1] = nums[j+2];
                }
            }
        }
        int count=0;
        for(int i=nums.length-1;i>0;i--){
            if(nums[i] == nums[i-1]) count++;
            else break;
        }
        return nums.length-count;
    }
}