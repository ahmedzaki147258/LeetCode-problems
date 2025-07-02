class Solution {
    public boolean isPerfectSquare(int num) {
        double squareRoot = Math.sqrt(num);
        return squareRoot % 1 == 0;
    }
}