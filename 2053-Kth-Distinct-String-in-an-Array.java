class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> countMap = new HashMap<>();
        for (String s:arr) {
            countMap.put(s, countMap.getOrDefault(s, 0) + 1);
        }

        List<String> list = new ArrayList<>();
        for (String s:arr) {
            if (countMap.get(s)==1) list.add(s);
        }

        return list.size()<k ? "" : list.get(k-1);
    }
}