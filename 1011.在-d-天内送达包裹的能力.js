/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

/**
 * x: 运载重量 fx：时间 单调递减
 * x范围：最大是货物的重量之和 最小是weights中的最大值
 * 求左边界
 */
var shipWithinDays = function (weights, days) {
  // fx 关系式
  function getDays(x) {
    let w = weights[0], d = 0;
    let flag = false;
    for (let i = 1; i < weights.length; i++) {
      const weight = weights[i];
      // console.log("%c Line:27 🍑", "color:#ffdd4d", w, (w + weight) > x);
      if ((w + weight) > x) {
        d++;
        w = weight;
        flag = true;
      } else {
        w += weight
      }
    }
    d++
    // console.log("%c Line:37 🌶", "color:#33a5ff", d);
    return d;
  }
  let right = weights.reduce((prev, next) => {
    return prev + next
  })
  let left = 1;
  for (let i = 0; i < weights.length; i++) {
    const weight = weights[i];
    if (weight > left) {
      left = weight;
    }
  }

  // console.log("%c Line:46 🥖", "color:#7f2b82", left, right);

  while (left <= right) {
    const mid = left + parseInt((right - left) / 2)

    // console.log("%c Line:53 🌭", "color:#7f2b82", mid);
    if (getDays(mid) <= days) {
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end

