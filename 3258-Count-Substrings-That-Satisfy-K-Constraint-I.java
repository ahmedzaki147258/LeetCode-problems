class Solution {
    public int countKConstraintSubstrings(String s, int k) {
        int cnt=0, n=s.length();
        ArrayList<String> arrayList = new ArrayList<>();
        for(int i=0;i<n;i++){
            for(int j=i+1;j<=n;j++){
                arrayList.add(s.substring(i,j));
            }
        }
        for (String str: arrayList) {
            if(isSubsequence(str,k)) cnt++;
        }
        return cnt;
    }
    public boolean isSubsequence(String str, int k) {
        int cnt0=0, cnt1=0;
        for(char ch: str.toCharArray()){
            if(Character.getNumericValue(ch)==0) cnt0++;
            else cnt1++;
        }
        return cnt0<=k || cnt1<=k;
    }
}