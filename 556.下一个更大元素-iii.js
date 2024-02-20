/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 依然单调数组；
var nextGreaterElement = function (n) {
  const nums = `${n}`.split('');
  const res = -1;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];



  }


};
// @lc code=end


// 队列实现按
// for + await 实现阻塞；防抖实现只执行一次；sleepFirst用于调整队列顺序
class Man {

}
// leading
function deb(fn, timeout, leading = true) {
  let timer;
  return function (...args) {
    if (leading) {
      !timer && fn.call(this, ...args);
    } else {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      if (!leading) {
        fn.call(this, ...args);
      }
      timer = null;
    }, timeout);
  }
}
function debounce1(fn, timeout) {
  let flag = null;
  return function (...args) {
    // !flag && fn.call(this, ...args);
    clearTimeout(flag);
    flag = setTimeout(() => {
      fn.call(this, ...args);
    }, timeout);
  }
}
// function