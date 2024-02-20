/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let res = 0, need = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      need += 2;
      if (need % 2 === 1) {
        res++;
        need--;
      }
    } else { // c === ')'
      need--;
      if (need === -1) {
        need = 1;
        res++;
      }
    }
  }
  return res + need;
};



// var minInsertions = function (s) {
//   let res = 0, need = 0;
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (c === '(') {
//   阅读 运动 学习 AIGC
//       stack += 1;
//     } else { // c === ')'
//       if (stack > 0) { // 需要右括号
//         if (i + 1 < s.length) {
//           const c1 = s[i + 1]
//           if (c1 === ')') {
//             stack--; // 匹配到，直接消除
//             i++;
//           } else {
//             res++;
//             stack--;
//           }
//         } else { // 已经是最后一个，但需要右括号
//           res++;
//           stack--;
//         }
//       } else { // 不需要右括号，但 c === ')'
//         if (i + 1 < s.length) {
//           const c1 = s[i + 1]
//           if (c1 === ')') {
//             res++; // 共两个右括号，需要一个左括号
//             i++;
//           } else {
//             res += 2; // 需要一个右括号和一个左括号来匹配
//           }
//         } else {
//           res += 2; // 需要一个右括号和一个左括号来匹配
//         }
//       }
//     }
//   }
//   return res + stack * 2;
// };
// @lc code=end


var sortArray = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  const mid = parseInt((nums.length / 2));
  const left = sortArray(nums.slice(0, mid + 1));
  const right = sortArray(nums.slice(mid + 1));
  return merge(left, right);
};
const merge = (left, right) => {
  const arr = [];
  let i = j = 0;
  while (i < left.length && j < right.length) {
    if (right[i] < left[j]) {
      arr.push(right[i]);
      i++;
    } else {
      arr.push(left[j]);
      j++
    }
  }
  // 归并排序
  if (i >= left.length) {
    arr.push(...right.slice(j))
  }
  if (j >= right.length) {
    arr.push(...left.slice(i))
  }
  return arr;
}
var isValidBST = function (root) {
  let res = true;
  function traverse(node) {


  }
  traverse(root);
};

// backtrack
// 路径、选择列表、结束条件

/** 路径 */
const track = [];
/** 路径中的元素被标记 */
const used = [];
/** 排列的可能性 */
const res = [];
/** 求nums的全排列 */
const backtrack = (nums, track, used) => {
  if (track.length === nums.length) {
    // res.push([...track])
  }
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (used[i]) {
      continue;
    }
    track.push(element);
    used[i] = true;
    backtrack(nums, track, used);
    track.pop();
    used[i] = false;
  }
}
// 函数backtrack像一个在决策树上游走的指针，通过row和col就可以表示函数遍历到的位置
// 复杂度O(N!) 穷举整棵决策树是无法避免的，不像动态规划存在重叠的子问题可以优化
// 回溯算法就是暴力穷举，复杂度一般都很高

// 如果不需要所有可能的解，只想要一个可行解怎么办呢？

// N皇后问题 套用 回溯模板，判断有没有走过“路径”变成了 该位置是否合规合法

// row = 0
const backtrack1 = (board, row) => {
  if (row === board.length) {
    res.push(board);
    return;
  }
  const n = board.length;

}


const isValid = (board, row, col) => {
  const n = board.length;

  // 一列只能有一个Q
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }
  // 检查左上
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  // 检查右上
  for (let i = row + 1, j = col - 1; i < n, j >= 0; i++, j--) {
    if (board[i][j] === 'Q') {
      return false
    }
  }
  return true;
}
