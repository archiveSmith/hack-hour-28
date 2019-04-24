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

const bestProfit = (stock_prices_yesterday) => {
    if(!Array.isArray(stock_prices_yesterday)) return 0;


    let openPrice = 0;
    let maxPrice = 0;
    let minPrice = Infinity;
    let openTime = 0;
    let minTime = 0;
    let maxTime = 0;
  
  
    for(let i = 0; i < stock_prices_yesterday.length; i++){
      openPrice = stock_prices_yesterday[0];
      openTime = i;
      if(stock_prices_yesterday[i] > maxPrice){
        maxPrice = stock_prices_yesterday[i]
        maxTime = i;
      }
      if(stock_prices_yesterday[i] < minPrice){
        minPrice = stock_prices_yesterday[i];
        minTime = i;
      }
    }
    // console.log(maxPrice)
    // console.log(minPrice)
    // console.log(maxTime)
    // console.log(minTime)
    if(maxPrice < 0){
      return 0;
    }
  
    return stock_prices_yesterday[maxTime] - stock_prices_yesterday[minTime]
  

}

module.exports = bestProfit;
