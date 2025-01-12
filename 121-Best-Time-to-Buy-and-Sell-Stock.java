class Solution {
    public int maxProfit(int[] prices) {
        int minPrice=Integer.MAX_VALUE, maxProfit=0;
        for (int price: prices) {
            if (price<minPrice) minPrice = price;
            else maxProfit = Math.max(maxProfit, price-minPrice);
        }
        return maxProfit;

        // int n=prices.length, localMax=0, globalMax=0;
        // for(int i=0;i<n;i++){
        //     for(int j=i+1;j<n;j++) if(prices[j]-prices[i]>localMax) localMax=prices[j]-prices[i];
        //     if(globalMax<localMax) globalMax=localMax;
        // }
        // return globalMax;
    }
}