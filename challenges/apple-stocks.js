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

    let lows = [];
    let highs = [];

    //get the high and low points of the array
    let prev = array[0];
    let curr = array[0];
    for (let i = 0; i < array.length; i++) {
        prev = (array[i-1] != undefined)?  array[i-1] : prev;
        curr = array[i];
        next = (array[i+1] != undefined)?  array[i+1] : next;

        if( prev <= curr && curr > next) highs.push(i);
        if(prev >= curr && curr < next) lows.push(i);

    }
    //if last price of the day is higher than its previos price ad it to the list of highs to check
    if(array[array.length -1] > array[array.length -2]){
        highs.push(array.length -1);
    }

    //for each possible buy time, check selling it later on
    let buyTime,sellTime;
    let maxProfit = 0;

    //highs and lows are both arrays of indexs in the main array
    for (let i = 0; i < lows.length; i++) {
        const lowPrice = array[lows[i]];

        for (let j = 0; j < highs.length; j++) {
            if(lows[i] > highs[j]) continue;     // current low index is higher than this high, skip comparison
            const highPrice = array[highs[j]];

            let currProfit = highPrice - lowPrice;
            if(currProfit > maxProfit) {
                buyTime = lows[i];
                sellTime = highs[j];
                maxProfit = currProfit
            }
        }
    }

    // console.log(`max Profit: ${maxProfit}`);
    // console.log(`Buy at: ${buyTime}   Sell at: ${sellTime}`);

    return maxProfit
}



let prices = [8, 6, 7, 6, 5, 4, 8, 12, 12, 2, 11, 10]

let moneys = bestProfit(prices)

console.log(moneys);


module.exports = bestProfit;
