/*
 * @lc app=leetcode.cn id=1817 lang=javascript
 *
 * [1817] 查找用户活跃分钟数
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const arr = Array(k).fill(0);
  const map = {};
  for (let i = 0; i < logs.length; i++) {
    const [id, time] = logs[i];
    if (!map[id]) {
      map[id] = new Set()
    }
    map[id].add(time)
  }
  Object.keys(map).forEach(id => {
    const j = map[id].size - 1;
    arr[j]++;
  })
  return arr;
};
// @lc code=end

