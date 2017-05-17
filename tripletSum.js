var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        max = 0,
        cur;
        
    if (length === 0) {
        return 0;
    }
    low = prices[0];
    high = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > high) {
            high = cur;
        }else if (cur < low) {
            //need to reset low and high in order to make sure you need to buy before you sell
            low = cur;
            high = cur;
        }
        if (high - low > max) {
            max = high - low;
        }
    }
    console.log(max)
    return max;
};

maxProfit([[100, 180, 260, 310, 40, 535, 695]])