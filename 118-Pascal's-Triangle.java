class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<>();
        for(int i=1;i<=numRows;i++){
            List<Integer> row = new ArrayList<>();
            for(int j=1;j<=i;j++){
                if(j==1) row.add(1);
                else if(j==i) row.add(1);
                else row.add(res.get(i-2).get(j-2)+res.get(i-2).get(j-1));
            }
            res.add(row);
        }
        return res;
    }
}