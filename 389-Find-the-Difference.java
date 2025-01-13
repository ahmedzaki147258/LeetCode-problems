import java.util.Hashtable;

class Solution {
    public char findTheDifference(String s, String t) {
        s += \ \;
        Hashtable<Character, Integer> ht = new Hashtable<>();
        for(int i=0;i<t.length();i++){
            if(ht.containsKey(t.charAt(i))){
                ht.put(t.charAt(i), ht.get(t.charAt(i))+1);
            } else {
                ht.put(t.charAt(i), 1);
            }

            if(s.charAt(i) != ' '){
                if(ht.containsKey(s.charAt(i))){
                    ht.put(s.charAt(i), ht.get(s.charAt(i))+1);
                } else {
                    ht.put(s.charAt(i), 1);
                }
            }
        }
        for(char ch: ht.keySet()){
            if(ht.get(ch)%2 == 1) return ch;
        }
        return ' ';
    }
}