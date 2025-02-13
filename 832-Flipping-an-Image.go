func flipAndInvertImage(image [][]int) [][]int {
    n:=len(image);
	for i:=0;i<n;i++{
		l:=len(image[i])
		left,right:=0,l-1;
		for left<right{
			image[i][left], image[i][right] = image[i][right], image[i][left];
			left++;
			right--;
		}
		for j:=0;j<l;j++{
			if image[i][j]==1{
				image[i][j]=0
			} else {
				image[i][j]=1
			}
		}
	}
	return image;
}