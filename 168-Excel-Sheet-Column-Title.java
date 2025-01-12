class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder sBuilder = new StringBuilder();
        while (columnNumber>0) {
            columnNumber--;
            int rem = columnNumber%26+65;
            sBuilder.append((char)rem);
            columnNumber/=26;
        }
        return sBuilder.reverse().toString();
    }
}