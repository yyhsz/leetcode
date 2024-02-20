/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const diff = Array(1001).fill(0);
  for (let i = 0; i < trips.length; i++) {
    const [num, from, to] = trips[i];
    diff[from] += num;
    if (to < diff.length) { // 这里不是 to - 1, 因为to是到站，到站乘客就下车了，不再占用位置
      diff[to] -= num;
    }
  }
  const res = Array(1001).fill(0);
  res[0] = diff[0];
  for (let i = 1; i < diff.length; i++) {
    res[i] = res[i - 1] + diff[i]
  }
  return res.every(num => num <= capacity)

};
// @lc code=end

