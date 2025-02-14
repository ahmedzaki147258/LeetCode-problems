class Solution {
    public String replaceDigits(String s) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < s.length(); i++) {
            if(i%2==0) sb.append(s.charAt(i));
            else sb.append((char)((int)s.charAt(i-1)+Integer.parseInt(Character.toString(s.charAt(i)))));
        }
        return sb.toString();
    }
}