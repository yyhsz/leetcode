/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const res = [];
  const n = nums.length;
  for (let i = 2 * n - 1; i >= 0; i--) {
    const element = nums[i % n];
    while (stack.length > 0 && stack[stack.length - 1] <= element) {
      stack.pop();
    }
    res[i % n] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(element);
  }
  return res;
};
// @lc code=end

function debounce(fn, interval = 0) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}

class Lazy {
  constructor(str) {
    console.log("%c Line:30 🍓 str", "color:#6ec1c2", str);
    this.p = Promise.resolve();
    this.tasks = [];
  }
  exec = debounce(async () => {
    for (let i = 0; i < this.tasks.length; i++) {
      const fn = this.tasks[i];
      await fn();
    }
  })
  eat() {
    this.p.then(() => {
      console.log("%c Line:31 🥝", "color:#ea7e5c", 'eat');
      this.p = Promise.resolve();
    })
    return this;
  }
  sleep(timeout) {
    this.p = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("%c Line:34 🍺", "color:#b03734", 'sleep');
      }, timeout);
    })
    return this;
  }
}
const man = new Lazy();



const fun = async () => {
  for (let i = 0; i < arr.length; i++) {
    await arr[i]();
  }
}


const arr = [() => { console.log(1) },
() => { console.log(2) },
() => new Promise((res) => {
  setTimeout(() => {
    console.log(3)
    res();
  }, 3000)
}), () => { console.log(4) }, () => { console.log(5) }];

// await会阻塞for循环：
const foo = async () => {
  for (let i = 0; i < arr.length; i++) {
    await arr[i](); // 下一个for循环会被阻塞
  }
}
// 怎么实现sleep：用this.p 去控制当前任务是否异步
//  除了用 this.p 去实现sleep（停顿），还能怎么实现：用队列+await阻塞for循环（队列中有异步任务的时候就可以被阻塞）
// 怎么改变执行顺序（实现sleepFirst）：用防抖，在所有执行完之前不真正执行，这样在真正执行之前可以调整队列中的任务顺序