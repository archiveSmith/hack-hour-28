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
 * 

    function takes an array

    find the greatest difference between values such that the higher value is at a higher 
    index than the lower value.




 */

function bestProfit(stock_prices_yesterday) {

  if (Array.isArray(stock_prices_yesterday) === false) {
    return 0
  }

  let highestVal = Number.NEGATIVE_INFINITY;
  let lowestVal = Number.POSITIVE_INFINITY;
  let highestInx;
  let lowestInx;

  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] > highestVal) {
      highestVal = stock_prices_yesterday[i]
      highestInx = i;
    }

    if (stock_prices_yesterday[i] < lowestVal) {
      lowestVal = stock_prices_yesterday[i]
      lowestInx = i;
    }
  }

  if (highestInx === 0) {
    return 0;
  }

   let lowestBehind = Number.POSITIVE_INFINITY;
   let highestInFront = Number.NEGATIVE_INFINITY;
   let difference1;
   let difference2;

  for (let j = 0; j < highestInx; j++) {
    if (stock_prices_yesterday[j] < lowestBehind) {
      lowestBehind = stock_prices_yesterday[j];
    }
    }
  // First potential highest profit, highest value in array minus lowest value behind it
    difference1 = highestVal - lowestBehind;

  for (let k = stock_prices_yesterday.length; k > lowestInx; k--) {
    if (stock_prices_yesterday[k] > highestInFront) {
      highestInFront = stock_prices_yesterday[k];
    }
  }

    difference2 = highestInFront - lowestVal;

    if (difference1 > difference2) {
      return difference1;
    } else {
      return difference2;
    }



}

module.exports = bestProfit;
