/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function nSum(n, nums, target, start = 0) { // nums 一定是有序的
  const res = [];
  if (n === 2) {
    let left = start, right = nums.length - 1;
    while (left < right) {
      const v1 = nums[left], v2 = nums[right];
      const sum = v1 + v2;
      if (target === sum) {
        while (v1 === nums[left] && left < right) {
          left++;
        }
        while (v2 === nums[right] && left < right) {
          right--;
        }
        res.push([v1, v2]);
      } else if (sum < target) {
        while (v1 === nums[left] && left < right) {
          left++;
        }
      } else if (sum > target) {
        while (v2 === nums[right] && left < right) {
          right--;
        }
      }
    }
  }

  for (let i = start; i < nums.length; i++) {
    const e = nums[i];
    const v = nSum(n - 1, nums, target - e, i + 1)
    if (!!v.length) {
      v.forEach(item => {
        res.push([e, ...item])
      })
    }
    while (e === nums[i + 1] && i < nums.length) {
      i++;
    }
  }
  return res;
}


var threeSum = function (arr) {
  const nums = [...arr].sort((a, b) => a - b);
  return nSum(3, nums, 0)
};
// @lc code=end

