/*
 * @lc app=leetcode.cn id=1562 lang=javascript
 *
 * [1562] 查找大小为 M 的最新分组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  let str = Array(arr.length).fill(0);
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    str[e - 1] = 1;
    let has1 = false; // 有长度为m的子串
    let accu = 0;

    for (let j = 0; j < str.length; j++) {
      const curr = str[j];
      if (curr === 1) {
        accu++
      }
      // console.log("%c Line:27 🍉", "color:#2eafb0", i, j, curr, accu, str.join(''));
      if (curr === 0) {
        if (accu === m) {
          has1 = true;
          accu = 0;
          break;
        }
        accu = 0;
      }
    }
    if (accu === m) {
      has1 = true;
    }
    if (has1) {
      res = i + 1;
    }
  }
  return res;
};
// @lc code=end