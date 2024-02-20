/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// 1. 对数组的某个区间频繁增减

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const diff = Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [p, q, seats] = bookings[i];
    const first = p - 1, last = q - 1;
    diff[first] += seats;
    if (last + 1 < n) {
      diff[last + 1] -= seats;
    }
  }
  const res = Array(n).fill(0);

  res[0] = diff[0];
  for (let i = 1; i < n; i++) {
    res[i] = diff[i] + res[i - 1];
  }
  return res;
};
// @lc code=end