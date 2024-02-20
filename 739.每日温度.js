/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const res = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const element = temperatures[i];
    while (stack.length > 0 && stack[stack.length - 1].value <= element) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack[stack.length - 1].idx - i : 0;
    stack.push({
      idx: i,
      value: element,
    })
  }
  return res;
};
// @lc code=end

// 仅实现 sleep：意味着只需要中断，肯定需要一个 promise 控制
// man.sleep(5000).eat() eat要在sleep之后执行，那么控制sleep的promise必须在eat函数和sleep函数之外：那就是要把promise挂在this上了
// man.eat().eat().sleep(5000).eat().sleep(2000).sleep().eat()
class Man {
  p = Promise.resolve();
  eat() {
    this.p.then(() => {
      console.log("%c Line:35 🌽", "color:#f5ce50", 'eat');
    })
    return this;
  }
  sleep(timeout = 0) {
    this.p = new Promise((resolve) => {
      setTimeout(() => {
        console.log("%c Line:37 🍢 sleep", "color:#b03734", 'sleep');
        resolve();
      }, timeout);
    })
    return this;
  }
}
const man = new Man();
