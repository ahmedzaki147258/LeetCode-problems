class Solution {
    public boolean isValid(String s) {
        Stack<Character> charStack = new Stack<>();
        for(char ch: s.toCharArray()){
            if(ch=='('||ch=='['||ch=='{'){
                charStack.push(ch);
            } else if(charStack.empty()){
                return false;
            } else if(ch==')'){
                if(charStack.peek()=='(') charStack.pop();
                else return false;
            } else if(ch==']'){
                if(charStack.peek()=='[') charStack.pop();
                else return false;
            } else if(ch=='}'){
                if(charStack.peek()=='{') charStack.pop();
                else return false;
            }
        }
        return charStack.empty();
    }
}