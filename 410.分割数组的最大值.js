/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * x 子数组各自和的最大值  ；fx是 子数组各自和的最大值 最小的情况下去计算得到分成几组（运输船所需要运输的天数）
 * fx关于x单调递减（子数组的和越大子数组元素越多分组越少）
 * 找x最小即左边界
 */
var splitArray = function (nums, k) {
  function getK(x) {
    let n = nums[0];
    let t = 0;
    for (let i = 1; i < nums.length; i++) {
      const element = nums[i];
      if (n + element > x) {
        t++;
        n = element;
      } else {
        n += element;
      }
    }
    t++;
    return t
  }

  let left = 0, right = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    right += element;
    if (left < element) {
      left = element;
    }
  }
  while (left <= right) {
    const mid = left + parseInt((right - left) / 2);
    if (getK(mid) <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end

