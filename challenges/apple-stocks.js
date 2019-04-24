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
    let min = +Infinity;
    let max = -Infinity;
    
        if (!Array.isArray(stock_prices_yesterday)) return 0;

    //can only sell after purchasing so sale has to always be at least one behind purchase

    for (let i =stock_prices_yesterday.length-2; i>1; i--) {

        if (stock_prices_yesterday[i] > max) {
            max = stock_prices_yesterday[i];
        } 
        if (stock_prices_yesterday[i-1] < min) {
            min = stock_prices_yesterday[i-1];
            if (min > max) {
              min = +Infinity;
            }
        }
    }

    if (min > max) {
        return 0;
    } else if (max > min) {
        return max-min;
    }

}

module.exports = bestProfit;
