class Solution {
    public String sortSentence(String s) {
        String res="";
        String []strSplit=s.split(" ");
        var hashmap=new HashMap<Integer, String>();
        for (String str : strSplit) {
            hashmap.put(Integer.parseInt(String.valueOf(str.charAt(str.length()-1))), str.substring(0, str.length()-1));
        }
        for(int i=0;i<hashmap.size();i++){
            res += hashmap.get(i+1);
            res += " ";
        }
        return res.substring(0, res.length()-1); 
    }
}