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
  let sorted = [...stock_prices_yesterday].sort((a, b) => b - a); 
  let highestProfit = 0;
  let startIdx, stocksAfter, profit;

  sorted.forEach((price) => {
    startIdx = stock_prices_yesterday.indexOf(price);
    stocksAfter = stock_prices_yesterday.slice(startIdx);
    profit = price - Math.min(...stocksAfter);

    if (profit > highestProfit) highestProfit = profit;
  })

  return highestProfit;
}

module.exports = bestProfit;


console.log(bestProfit([500, 510, 520, 480, 450, 700, 600, 580]));