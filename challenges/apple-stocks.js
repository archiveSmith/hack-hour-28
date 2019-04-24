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
    if (!Array.isArray(stock_prices_yesterday)) {
        return 0;
    }
    //find min of array
    let min = Math.min(...stock_prices_yesterday);
    //find max of array
    let max = Math.max(...stock_prices_yesterday);
    //subtract max from min to get profit
    if (max <= min) {
        return 0;
    }
    let profit = max - min;
    //return profit
    return profit;
}

module.exports = bestProfit;
