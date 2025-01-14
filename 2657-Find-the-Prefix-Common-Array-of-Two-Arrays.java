class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int n=A.length;
        int[] res=new int[n];
        Map<Integer, Integer> hashtable = new HashMap<>();
        for(int i=0;i<n;i++){
            if(hashtable.containsKey(A[i])){
                hashtable.put(A[i], hashtable.get(A[i])+1);
            } else {
                hashtable.put(A[i], 1);
            }

            if(hashtable.containsKey(B[i])){
                hashtable.put(B[i], hashtable.get(B[i])+1);
            } else {
                hashtable.put(B[i], 1);
            }

            int count=0;
            for (Integer key : hashtable.keySet()) {
                if(hashtable.get(key)>=2) count++;
            }
            res[i]=count;
        }
        return res;
    }
}