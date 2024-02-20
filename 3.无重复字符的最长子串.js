/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let right = left = 0;
  const map = {};
  let res = 0;
  while (right < s.length) {
    const c1 = s[right];
    right++;

    if (map[c1]) {
      map[c1]++;
    } else {
      map[c1] = 1;
    }

    while (map[c1] > 1) {
      const c2 = s[left];
      left++;
      map[c2]--;
    }
    res = Math.max(res, right - left)
  }
  return res;
};
// @lc code=end

