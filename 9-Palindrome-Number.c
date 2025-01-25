bool isPalindrome(int x) {
    char str[12];
    sprintf(str, \%d\, x); // convert int to string
    int lengthOfString = strlen(str);
    for(int i=0;i<lengthOfString/2;i++){
        if(str[i] != str[lengthOfString-i-1]) return 0;
    }
    return 1;
}