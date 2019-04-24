/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
   let highestStock = Math.max(...stock_prices_yesterday);
   //console.log(highestStock);

   /*for(let i = 0; i < stock_prices_yesterday; i++)
   {
      if(highestStock === stock_prices_yesterday[i])
      {
        return stock_prices_yesterday[i];
      }
      else*/
       if(!Array.isArray(stock_prices_yesterday)) {
         console.log('Input is Invalid.')
      }
      else if(highestStock) {
        return highestStock;
      }
      else {
        return 0;
      }

}

console.log(bestProfit([1,2,3,4,6]))

module.exports = bestProfit;
