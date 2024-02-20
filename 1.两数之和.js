/*
 * @lc app=leetcode.cn id=1 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (map[element] !== undefined) {
      return [map[element], i]
    }
    map[target - element] = i;
  }
};
// @lc code=end

