class Solution {
    public int[] answerQueries(int[] nums, int[] queries) {
        Arrays.sort(nums);
        for(int i=0;i<queries.length;i++){
            int cnt=0, sum=0;
            for(int num: nums){
                if(sum+num<=queries[i]){
                    sum+=num;
                    cnt++;
                } else break;
            }
            queries[i]=cnt;
        }
        return queries;
    }
}