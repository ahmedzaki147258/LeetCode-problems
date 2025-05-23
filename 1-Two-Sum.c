/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = malloc(2*sizeof(int));
    *returnSize = 2;
    for(int i=0;i<numsSize;i++){
        for(int j=0;j<numsSize;j++){
            if(i!=j && nums[i]+nums[j]==target){
                result[0]=i;
                result[1]=j;
                return result;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}