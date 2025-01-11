class Solution {
    public int specialArray(int[] nums) {
        Arrays.sort(nums);
        int n=nums.length;
        for(int i=0;i<=n;i++){
            int c=0;
            for(int num: nums){
                if(num>=i) c++;
            }
            
            if(i==c) return i;
        }
        return -1;
    }
}