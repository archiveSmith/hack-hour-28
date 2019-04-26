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

function bestProfit(prices) {
  if(!Array.isArray(prices)) return 0;

  // potential profits array
  const potProfit = [0]; //at worst no profit
  let minIndex = 0;

  for(let i = 0; i < prices.length; i++) {
    // smaller price in the day
    if(prices[i] < prices[minIndex]) {
      minIndex = i;
    } else if (prices[i] > prices[minIndex]){
      potProfit.push(prices[i] - prices[minIndex]);
    }
  }

  //return max of potential profits
  return Math.max(...potProfit);
}

let arr = [500, 1100, 300, 600, 200, 1000, 500];

console.log(bestProfit(arr));

module.exports = bestProfit;
