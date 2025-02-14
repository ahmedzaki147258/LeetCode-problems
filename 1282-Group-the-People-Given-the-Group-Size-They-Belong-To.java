class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        List<List<Integer>> res = new ArrayList<>();
        Map<Integer, List<Integer>> map=new HashMap<>();
        for (int i=0;i<groupSizes.length;i++) {
            if(!map.containsKey(groupSizes[i])) map.put(groupSizes[i], new ArrayList<>());
            map.get(groupSizes[i]).add(i);
        }

        map.forEach((k,v)->{
            for (int i=0;i<v.size();i+=k) {
                res.add(v.subList(i, i+k));
            }
        });
        return res;
    }
}