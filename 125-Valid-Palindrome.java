class Solution {
    public boolean isPalindrome(String s) {
        int n=s.length();
        s=s.toLowerCase();
        StringBuffer sBuffer = new StringBuffer();
        for(int i=0;i<n;i++){
            if((s.charAt(i)>=97&&s.charAt(i)<=122) || Character.isDigit(s.charAt(i))){
                sBuffer.append(s.charAt(i));
            }
        }

        n=sBuffer.length();
        s=sBuffer.toString();
        for(int i=0;i<n;i++){
            if(s.charAt(i)!=s.charAt(n-1-i)) return false;
        }
        return true;
    }
}