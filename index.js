function maxprofit (nums) {
    let maxProfit = 0;
    let left = 0;
    let right = 1;
 
    while (right < nums.length - 1) {
        if (nums[left] < nums[right]) {
            maxProfit = nums[right] - nums[left];
        } else{
            left = right;
        }
        right += 1;
    }
    return maxProfit;
}

module.exports = maxprofit