/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + parseInt((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (right < 0) return -1;
  return nums[right] === target ? (left - 1) : -1;
};
// @lc code=end


// 要弄清楚区间到底是什么：左闭右开？全闭合？根据区间的闭合情况去判断代码内的各种细节：要不要 +1 要不要 -1
// let left = 0, right = nums.length - 1; // 这样设置左右指针时，区间是全闭合的
// while (left <= right) { // 由于是全闭合区间，退出循环的条件自然是区间为空
//   let mid = left + parseInt((right - left) / 2);
//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] < target) {
//     left = mid + 1;
//   } else if (nums[mid] > target) {
//     right = mid - 1;
//   }
// }
// return -1