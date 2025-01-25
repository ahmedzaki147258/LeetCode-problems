class Solution {
    public int romanToInt(String s) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put(\I\, 1);
        map.put(\V\, 5);
        map.put(\X\, 10);
        map.put(\L\, 50);
        map.put(\C\, 100);
        map.put(\D\, 500);
        map.put(\M\, 1000);

        int res = 0;
        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'I' && i+1 < s.length()){
                if(s.charAt(i+1) == 'V'){
                    res += 4;
                    i++;
                } else if(s.charAt(i+1) == 'X'){
                    res += 9;
                    i++;
                } else {
                    res += 1;
                }
            } else if(s.charAt(i) == 'X' && i+1 < s.length()){
                if(s.charAt(i+1) == 'L'){
                    res += 40;
                    i++;
                } else if(s.charAt(i+1) == 'C'){
                    res += 90;
                    i++;
                } else {
                    res += 10;
                }
            } else if(s.charAt(i) == 'C' && i+1 < s.length()){
                if(s.charAt(i+1) == 'D'){
                    res += 400;
                    i++;
                } else if(s.charAt(i+1) == 'M'){
                    res += 900;
                    i++;
                } else {
                    res += 100;
                }
            } else {
                res += map.get(Character.toString(s.charAt(i)));
            }
        }
        return res;
    }
}