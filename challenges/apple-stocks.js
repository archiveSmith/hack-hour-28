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
  if(!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.legth <= 1) return 0;
  let bestPurchasePriceIdx;
  let bestSalePriceIdx;
  let maxProfit = -Infinity;
  for(let minute = 0; minute < stock_prices_yesterday.length - 1; minute += 1){
    let currentMinutePrice = stock_prices_yesterday[minute];
    for(let secondMinute = minute + 1; secondMinute < stock_prices_yesterday.length; secondMinute += 1){
      let secondMinutePrice = stock_prices_yesterday[secondMinute];
      const currentTotal = secondMinutePrice - currentMinutePrice;
      if(currentTotal > maxProfit){
        maxProfit = currentTotal;
        // bestPurchasePriceIdx = minute;
        // bestSalePriceIdx = secondMinute;
      }
    }
  }
  return maxProfit > 0 ? maxProfit : 0;
}


module.exports = bestProfit;
