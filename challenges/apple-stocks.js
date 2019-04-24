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

function bestProfit(array) {
    if (Array.isArray(array) == false) return 0;

    //handle best case where the highest value of the day is after the lowest
    let totalMax = Math.max.apply(Math, array)
    let totalMin = Math.min.apply(Math, array)
    if (array.indexOf(totalMin) < array.indexOf(totalMax)) {
        return totalMax - totalMin;
    }

    let lows = [];
    let highs = [];

    let prev = array[0];
    let curr = array[0];
    for (let i = 0; i < array.length; i++) {
        const next = array[i];
        if (next > curr && curr < prev) {
            lows.push(i-1);
        } else if (next < curr && curr > prev) {
            highs.push(i-1);
        }
        prev = curr;
        curr = next;    //skips last index
    }

    //if last price of the day is higher than its previos price ad it to the list of highs to check
    if(array[length -1] > array[length -2]){
        highs.push(length -1);
    }



    let buyTime,sellTime;
    let maxProfit = 0;
    for (let i = 0; i < lows.length; i++) {
        const lowPrice = array[lows[i]];

        for (let j = 0; j < highs.length; j++) {
            if(lows[i] > highs[j]) continue; // current low index is higher than this high, skip comparison
            const highPrice = array[highs[j]];
            let currProfit = highPrice - lowPrice;
            if(currProfit > maxProfit) {
                buyTime = i;
                sellTime = j;
                maxProfit = currProfit
            }
        }
    }

    

    return maxProfit
}



let prices = [5, 6, 7, 6, 4, 5, 8, 12, 12, 5, 4, 10]

let moneys = bestProfit(prices)

console.log(moneys);


module.exports = bestProfit;
