/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

/**  
 * 什么时候用前缀和：1.数组本身不会改变 2.需要频繁计算数组中部分的和 3.不管维度，前缀和每个维度的第一个是0，方便计算
*/

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.preSums = Array(nums.length + 1);
  nums.reduce((pre, nxt, i) => {
    this.preSums[i] = pre;
    return pre + nxt;
  }, 0)
  this.preSums[this.preSums.length - 1] = this.preSums[this.preSums.length - 2] + this.nums[this.nums.length - 1];
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSums[right + 1] - this.preSums[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

