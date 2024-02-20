/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const need = {};
  const window = {};
  for (let i = 0; i < p.length; i++) {
    if (need[p[i]]) {
      need[p[i]]++
    } else {
      need[p[i]] = 1
    }
  }
  let left = right = 0;
  let valid = 0;
  while (right < s.length) {
    const c1 = s[right];
    right++;

    if (need[c1]) {
      if (window[c1]) {
        window[c1]++;
      } else {
        window[c1] = 1;
      }
      if (window[c1] === need[c1]) {
        valid++;
      }
    }

    while (right - left > p.length) {
      const c2 = s[left];
      left++;
      if (need[c2]) {
        if (window[c2] === need[c2]) {
          valid--;
        }
        window[c2]--;
      }
    }
    if (valid === Object.keys(need).length) {
      res.push(left);
    }
  }
  return res;
};
// @lc code=end

