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
	let minIdx = 0;
    let maxIdx = 1;
    let currMin = 0;
    let maxProfit = 0;

    if(!Array.isArray(stock_prices_yesterday)) return 0;
    for(var i = 1; i < stock_prices_yesterday.length; i++) {

        if(stock_prices_yesterday[i] < stock_prices_yesterday[currMin]) { 
        	currMin = i;
        }
        
        if(stock_prices_yesterday[maxIdx] - stock_prices_yesterday[minIdx] < stock_prices_yesterday[i] - stock_prices_yesterday[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }
    }
    maxProfit  = stock_prices_yesterday[maxIdx] - stock_prices_yesterday[minIdx];
    return maxProfit;
}
let sample = [500,600, 410, 850, 900, 540, 100, 50];
console.log(bestProfit(sample));

module.exports = bestProfit;
