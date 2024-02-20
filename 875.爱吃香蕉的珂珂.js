/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/**
 * 
 * x fx target，确定 fx 关于 x 单调即可
 * 
 * 
 */
var minEatingSpeed = function (piles, h) {
  // piles
  // 根据 piles 计算时间
  function getHours(k) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      const bananas = piles[i];
      hours += Math.ceil(bananas / k)
    }
    return hours
  }
  let left = 0, right = 1000000000; // 全闭区间
  while (left <= right) {
    const mid = left + parseInt((right - left) / 2);
    if (getHours(mid) === h) {
      right = mid - 1;
    } else if (getHours(mid) > h) {// 特别注意此时fx是单调递减的，所以处理上会不同
      left = mid + 1;
    } else if (getHours(mid) < h) {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end

