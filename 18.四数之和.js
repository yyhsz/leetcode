/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  const nums = [...arr].sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    const v = threeSum(nums, target - e, i + 1)
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
};
function threeSum(nums, target, start) {
  const res = [];
  for (let i = start; i < nums.length; i++) {
    const e = nums[i];
    const v = twoSum(nums, target - e, i + 1)
    if (!!v.length) {
      v.forEach(item => {
        res.push([e, ...item])
      })
    }
    while (e === nums[i + 1] && i < nums.length) {
      i++;
    };
  }
  return res;
}
function twoSum(nums, target, start) {
  const res = [];
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
  return res;
}

// @lc code=end

