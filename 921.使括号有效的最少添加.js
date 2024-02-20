/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let stack = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      stack++;
    } else {
      stack > 0 ? stack-- : res++;
    }
  }

  return res + stack;
};
// @lc code=end

