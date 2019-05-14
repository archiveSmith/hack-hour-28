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
  // handle invalid input
  if (!Array.isArray(stock_prices_yesterday)) {
    return 0;
  }
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] < minPrice) {
      minPrice = stock_prices_yesterday[i];
    }
    if (stock_prices_yesterday[i] > maxPrice) {
      maxPrice = stock_prices_yesterday[i];
    }
  }

  // const result = stock_prices_yesterday.reduce((accum, curr) => {
  //   curr < accum.minPrice ? accum.minPrice = curr : accum.minPrice = accum.minPrice;
  //   curr > accum.maxPrice ? accum.maxPrice = curr : accum.maxPrice = accum.maxPrice;
  //   return accum;
  // }, {
  //   minPrice: Infinity,
  //   maxPrice: -Infinity,
  //   maxProfit: this.maxPrice - this.minPrice
  // });

  // return result.maxProfit;

  // simple method
  // const maxPrice = Math.max(...stock_prices_yesterday);
  // const minPrice = Math.min(...stock_prices_yesterday);
  return maxPrice - minPrice;

  // better method

}

// const stockPrices = [100, 100, 120, 80, 0, 40, 100, 180, 200];

// console.log(bestProfit(stockPrices));

module.exports = bestProfit;