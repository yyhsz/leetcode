/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function X(nums) {
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    while (stack.length !== 0 && stack[0] < nums[i]) {
      stack.shift();
    }
    res[i] = stack.length === 0 ? -1 : stack[0];
    stack.push(element);
  }
  return res;
}

var nextGreaterElement = function (nums1, nums2) {
  const orderMap = {}
  nums1.forEach((item, i) => {
    orderMap[item] = i;
  });
  nums1.sort((a, b) => a - b);
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];

    

  }
};
// @lc code=end

