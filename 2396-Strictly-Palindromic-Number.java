class Solution {
    public boolean isStrictlyPalindromic(int n) {
        for (int i=2;i<=n-2;i++) {
            if(!convertAndCheck(n,i)) return false;
        }
        return true;
    }
    public static boolean convertAndCheck(int number, int base) {
        StringBuilder res = new StringBuilder();
        while (number > 0) {
            res.insert(0, number % base);
            number /= base;
        }
        int n=res.length();
        for (int i = 0; i < n; i++) {
            if(res.charAt(i) != res.charAt(n-i-1)) return false;
        }
        return true;
    }
}