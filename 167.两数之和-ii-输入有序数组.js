/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1;
  const res = [];
  // 假设 nums 有序
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (target === sum) {
      const v1 = nums[left], v2 = nums[right];
      res.push([v1, v2]);
      while (nums[left] === v1 && left < right) {
        left++;
      }
      while (nums[right] === v2 && left < right) {
        right--
      }
    } else if (sum < target) {
      while (nums[left] === v1 && left < right) {
        left++;
      }
    } else if (sum > target) {
      while (nums[right] === v2 && left < right) {
        right--
      }
    }
  }
  return res;
};
// @lc code=end

