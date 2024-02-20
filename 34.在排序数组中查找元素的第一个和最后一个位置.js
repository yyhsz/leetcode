/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left1 = 0, right1 = nums.length - 1; // 左边界
  const res = [];
  while (left1 <= right1) {
    const mid = left1 + parseInt((right1 - left1) / 2);
    if (nums[mid] === target) {
      right1 = mid - 1;
    } else if (nums[mid] < target) {
      left1 = mid + 1;
    } else if (nums[mid] > target) {
      right1 = mid - 1;
    }
  }
  if (left1 === nums.length || nums[left1] !== target) {
    res.push(-1);
  } else {
    res.push(left1);
  }

  let left2 = 0, right2 = nums.length - 1; // 右边界
  while (left2 <= right2) {
    const mid = left2 + parseInt((right2 - left2) / 2);
    if (nums[mid] === target) {
      left2 = mid + 1;
    } else if (nums[mid] < target) {
      left2 = mid + 1;
    } else if (nums[mid] > target) {
      right2 = mid - 1;
    }
  }

  if (right2 < 0 || nums[right2] !== target) {
    res.push(-1)
  } else {
    res.push(right2)
  }
  return res;
};
// @lc code=end