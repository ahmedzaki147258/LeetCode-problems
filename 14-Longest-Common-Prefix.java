class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder stringBuilder = new StringBuilder(strs[0]);
        for(int i=0;i<strs.length;i++){
            while(!strs[i].startsWith(stringBuilder.toString())){
                stringBuilder.deleteCharAt(stringBuilder.length()-1);
            }
       }
       return stringBuilder.toString();
    }
}