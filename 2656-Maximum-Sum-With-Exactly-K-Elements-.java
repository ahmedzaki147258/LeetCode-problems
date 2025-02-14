class Solution {
    public int maximizeSum(int[] nums, int k) {
        int sum=0;
        int max=Arrays.stream(nums).max().getAsInt();
        for (int i = 0; i < k; i++) {
            sum+=max+i;
        }
        return sum; 
    }
}