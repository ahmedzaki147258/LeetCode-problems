func finalPositionOfSnake(n int, commands []string) int {
    res,l:=0,len(commands);
	for i:=0;i<l;i++{
		if commands[i]=="UP" {
			res-=n;
		} else if commands[i]=="RIGHT" {
			res++;
		} else if commands[i]=="DOWN" {
			res+=n;
		} else if commands[i]=="LEFT" {
			res--;
		}
	}
	return res;
}