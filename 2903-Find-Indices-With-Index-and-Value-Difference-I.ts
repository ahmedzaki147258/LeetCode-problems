function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    const len=nums.length;
  for(let i=0;i<len;i++){
    for(let j=i;j<len;j++){
      if(Math.abs(i-j)>=indexDifference && Math.abs(nums[i]-nums[j])>=valueDifference){
        return [i, j];
      }
    }
  }
  return [-1, -1];
};