/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = fast = 0;
  while (fast < nums.length) {
    // -- ! --
    if (nums[slow] !== nums[fast]) {
      slow++;
      slow !== fast && (nums[slow] = nums[fast]);
    }
    fast++;
  }
  return slow + 1;

};
// @lc code=end

const arr = [1];
arr.filter((item, i) => {
  return arr.indexOf(item) === i
})
