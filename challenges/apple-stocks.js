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

    const highestP = Math.max(...stock_prices_yesterday);
    const lowestP = Math.min(...stock_prices_yesterday);
  
    const bestPossibleProfit = highestP - lowestP;
  
    if (bestPossibleProfit <= 0) return 0;
  
    return bestPossibleProfit;
  }
  
  const someStockP = [30,40,50,60,70];
  //best combo of 1 sale and 1 purchase is sell 70 and buy 30 -- 70-30 = 40 
  
  console.log(bestProfit(someStockP));

module.exports = bestProfit;
