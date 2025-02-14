class Solution {
    public int sumCounts(List<Integer> nums) {
        int sum=0; final int n=nums.size();
        for (int i = 0; i < n; i++) {
            Set<Integer> set=new HashSet<>();
            for (int j = i; j < n; j++) {
                set.add(nums.get(j));
                sum+=Math.pow(set.size(), 2);
            }
        }
        return sum;
    }
}