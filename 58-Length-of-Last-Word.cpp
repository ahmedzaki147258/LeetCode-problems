class Solution {
public:
    int lengthOfLastWord(string s) {
        int counter=0;
        int size=s.length();
        for(int i=size-1;i>=0;i--){
            if(s[i]!=' ') counter++;
            else if(counter>0) return counter;
        }
        return counter;
    }
};