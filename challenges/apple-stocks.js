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
    let highest = {time: 0, price: stock_prices_yesterday[0]}; // selling point
    let lowest = {time: 0, price: stock_prices_yesterday[0]}; // buying point
    let profit = highest.price - lowest.price;

    stock_prices_yesterday.forEach(function(price, time){
        if(price > highest.price && time > lowest.time) {
            highest.price = price;
            highest.time = time;
        }

        if(price < lowest.price && time < highest.time) {
            lowest.price = price;
            lowest.time = time;
        }
    })

    return profit
}

module.exports = bestProfit;
