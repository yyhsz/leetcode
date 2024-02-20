/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // 答案去重
  let right = 10, left = 0;
  const map = {};
  const set = new Set();
  while (right <= s.length) {
    const c1 = s.slice(left, right);
    if (map[c1]) {
      map[c1]++
    } else {
      map[c1] = 1;
    }
    if (map[c1] > 1) {
      set.add(c1)
    }
    right++;
    left++;
  }
  return [...set];
};
// @lc code=end

