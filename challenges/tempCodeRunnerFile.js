function bestProfit(stock_prices_yesterday) {
  let sorted = [...stock_prices_yesterday].sort((a, b) => b - a); 
  let highestProfit = 0;
  let startIdx, stocksAfter, profit;

  sorted.forEach((price) => {
    startIdx = stock_prices_yesterday.indexOf(price);
    console.log(startIdx);
    stocksAfter = stock_prices_yesterday.slice(startIdx);
    profit = price - Math.min(...stocksAfter);

    if (profit > highestProfit) highestProfit = profit;
  })

  return highestProfit;
}

module.exports = bestProfit;


console.log(bestProfit([500, 510, 520, 480, 450, 700, 600, 580]));