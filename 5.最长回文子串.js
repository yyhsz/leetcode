;/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function Palindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    // console.log("%c Line:15 🍐", "color:#ea7e5c", left, right, s[left], s[right]);
    left--;
    right++;
  }
  // console.log("%c Line:21 🍕", "color:#3f7cff", left, right);
  return s.slice(left + 1, right);
}
var longestPalindrome = function (s) {
  let res = ''
  // Palindrome(s, 0, 0);
  for (let i = 0; i < s.length; i++) {
    const str1 = Palindrome(s, i, i);
    const str2 = Palindrome(s, i, i + 1);
    res = str1.length > res.length ? str1 : res;
    res = str2.length > res.length ? str2 : res;
  }
  return res;
};
// @lc code=end

