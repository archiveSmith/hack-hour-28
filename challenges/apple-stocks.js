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
    // get max value and min value and check if the min value index is before max value
    if(stock_prices_yesterday.length < 2) {
        return 0;
    }
    let maxVal = Math.max(...stock_prices_yesterday);
    let minVal = Math.min(...stock_prices_yesterday);
    if(stock_prices_yesterday.indexOf(maxVal) > stock_prices_yesterday.indexOf(minVal)) {
        const profit = maxVal - minVal;
        if(profit > 0.01) {
            return profit;
        } else {
            return 0
        }
    } else {
        let sum = 0;
        for(let i = 0; i < stock_prices_yesterday.length; i += 1) {
            for(let j = i + 1; j < stock_prices_yesterday.length; j += 1) {
                let diff = stock_prices_yesterday[j] - stock_prices_yesterday[i]
                if(diff > sum) {
                    sum = diff;
                }
            }
        }
        if(sum > 0.01) return sum;
        return 0;
    }

}

stock_prices_yesterday = [1,4,5,3,2,6] // 5
stock_prices_yesterday1 = [6, 6, 2, 3,4] // 2
stock_prices_yesterday2 = [10,5,2,1,0] // 0 
// stock_prices_yesterday3
console.log(bestProfit(stock_prices_yesterday2))

module.exports = bestProfit;


// time-complexity: O(N) - constant # of operations on N elements of array
// space-complexity: O(1) - only storing values in variables
function bestProfit(prices) {
    let maxProfit = 0; // keeps track of max profit
    let minI = 0; // keeps track of the index of the minimum value
    // we want to proceed with our logic only if prices array exists
    if (prices) {
      for (let i = 1; i < prices.length; i++) {
        // check if current index is the index of new minimum value
        if (prices[i] < prices[minI]) {
          minI = i; // set minI to the current index
        }
        // calculate possible profit of current price - lowest price
        const possibleProfit = prices[i] - prices[minI];
        // reset max profit if current possible profit is greater than current max profit
        if (possibleProfit > maxProfit) {
          maxProfit = possibleProfit;
        }
      }
    }
    return maxProfit;
  }
