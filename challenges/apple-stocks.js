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
  if(!Array.isArray(stock_prices_yesterday)) return 0;

  //find earliest min stock price to buy
  let minPrice = Math.min(...stock_prices_yesterday);
  let minIndex = stock_prices_yesterday.indexOf(minPrice);

  //find max stock price after purchase to sell
  let maxPrice = Math.max(...(stock_prices_yesterday.slice(minIndex)));

  //handle if all were decreasing (e.g. min was at last index)
  if (maxPrice <= minPrice) return 0;

  return maxPrice - minPrice;
}

let arr = [500, 400, 300, 600, 200, 1000, 500];

module.exports = bestProfit;
