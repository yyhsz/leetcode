/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const window = {};
  const need = {};
  let left = right = 0;
  let valid = 0;

  for (let i = 0; i < s1.length; i++) {
    if (need[s1[i]]) {
      need[s1[i]]++
    } else {
      need[s1[i]] = 1
    }
  }
  console.log(need);
  while (right < s2.length) {
    const c1 = s2[right];
    right++;

    if (need[c1]) {
      if (window[c1]) {
        window[c1]++
      } else {
        window[c1] = 1;
      }
      if (window[c1] === need[c1]) {
        valid++;
      }
    }

    while (right - left > s1.length) {
      const c2 = s2[left];
      left++;
      if (need[c2]) {
        if (window[c2] === need[c2]) {
          valid--;
        }
        window[c2]--
      }
    }
    if (valid === Object.keys(need).length) {
      return true;
    }
  }
  return false;
};
// @lc code=end

