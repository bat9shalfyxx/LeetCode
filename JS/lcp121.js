//////////////////working, but can not proceed huge array without exceeding time limit because of O(N**2)
// let maxProfit = (prices) => {
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = prices.length - 1; j > i; j--) {
//             let profit = prices[j] - prices[i];

//             if (prices[j] > prices[i]) {
//                 if (profit > maxProfit) {
//                     maxProfit = profit;
//                 }
//             }
//         }
//     }
//     return maxProfit;
// };

//////////////////cyclical implementation:
let maxProfit = (prices) => {
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit;
};
