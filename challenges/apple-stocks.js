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
  let tempMin = stock_prices_yesterday[0];
  let tempMax = stock_prices_yesterday[0];
  let tempProfit = 0;
  
  let currentMin;
  let currentMax;
  let currentProfit;

  for (let i = 1; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] < tempMin) {
      currentMin = tempMin;
      currentMax = tempMax;
      currentProfit = tempProfit;
      tempMin = stock_prices_yesterday[i];
    }
  }

}

console.log(bestProfit([45,5,6,7,54,34,89,65,89,45,2,88]))

module.exports = bestProfit;
