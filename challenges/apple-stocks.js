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

 //[minutes after 9:30] = stock cost 
 // 

function bestProfit(stock_prices_yesterday) {
  let arr = stock_prices_yesterday;

  if(arr.length < 2){
    return 0;
  } 

  let minIdx = 0;
  let maxIdx = 1;
  let currMinutes = 0; 
  let maxProfit = 0;

  //find at how minutes after 9:30 did stock was the cheapest
  for (let i = 1; i < arr.length; i++) {
    if( arr[i] < arr[currMinutes] ) {
      currMinutes = i;
    }

  // 
    if( arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMinutes] ){
      maxIdx = i;
      minIdx = currMinutes;
    }

  }
  let bestProfit = arr[maxIdx] - arr[minIdx];
  return bestProfit;

}

module.exports = bestProfit;
