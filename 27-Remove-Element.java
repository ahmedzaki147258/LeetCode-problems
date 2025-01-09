class Solution {
    public int removeElement(int[] nums, int val) {
        int cnt=0;
        ArrayList<Integer> arrayList=new ArrayList<>();
        for(int i=0;i<nums.length;i++){
            if(nums[i]!=val){
                arrayList.add(nums[i]);
                cnt++;
            }
        }
        for(int i=0;i<arrayList.size();i++){
            nums[i]=arrayList.get(i);
        }
        return cnt;
    }
}