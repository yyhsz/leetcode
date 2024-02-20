/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {};
  const window = {};
  for (let i = 0; i < t.length; i++) {
    if (need[t[i]]) {
      need[t[i]]++;
    } else {
      need[t[i]] = 1;
    }
  }

  let left = right = 0;
  let valid = 0;
  let len = Infinity;
  let start = 0;

  while (right < s.length) {
    const c = s[right];
    right++;

    // 更新右窗口后的操作
    if (need[c]) { // 判断字符是不是符合要求
      if (window[c]) {  // 更新窗口内符合要求的字符集合
        window[c]++
      } else {
        window[c] = 1;
      }
      if (window[c] === need[c]) { // 如果该字符个数已经符合要求
        valid++
      }
    }

    // debug

    console.log("%c Line:48 🥝", "color:#33a5ff", left, right, valid);

    while (valid === Object.keys(need).length) {// 判断当前窗口内是否有可行解，有可行解才需要缩小左窗口
      const d = s[left];
      const l = right - left;
      if (l < len) {
        start = left;
        len = l
      }

      left++;
      // 更新左窗口后的操作 （与更新右窗口后的操作正好相反）
      if (need[d]) {
        window[d]--;
        if (window[d] < need[d]) { // 如果该字符个数不符合要求
          valid--
        }
      }

    }
  }

  return len === Infinity ? "" : s.slice(start, start + len)

};
// @lc code=end



// const needs = {}, win = {}

// for (let i = 0; i < t.length; i++) {
//   const element = t[i];
//   if (needs[element]) {
//     needs[element]++
//   } else {
//     needs[element] = 1
//   }
// }

// let left = right = valid = start = 0;
// let len = Infinity;

// while (right < s.length) {
//   const c = s[right];
//   right++
//   // 窗口更新后的操作
//   if (needs[c]) {
//     if (win[c]) {
//       win[c]++
//     } else {
//       win[c] = 1
//     }
//     if (win[c] === needs[c]) {
//       valid++;
//     }
//   }
//   // debug console.log(left,right);


//   // 窗口内有可行解：
//   while (valid === Object.keys(needs).length) {
//     if (right - left < len) {

//       start = left;
//       len = right - left;
//     }
//     const d = s[left];
//     left++;

//     // 窗口更新后的操作
//     if (needs[d]) {
//       if (win[d] === needs[d]) {
//         valid--;
//       }
//       win[d]--;
//     }
//   }
// }

// return len === Infinity ? '' : s.slice(start, len + start)