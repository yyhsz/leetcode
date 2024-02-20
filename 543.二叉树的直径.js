/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// let res = 0;
var diameterOfBinaryTree = function (root) {
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return left + right + 1;
};
function maxDepth(node) {
  if (node === null) {
    return 0;
  }
  const leftDepth = maxDepth(node.left);
  const rightDepth = maxDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

// 转换成求深度
//maxDepth(r) = max(maxDepth(r.left), maxDepth(r.eight)) + 1;
// @lc code=end
const levelTraverse = (root) => {
  const q = [root];
  while (q.length !== 0) {
    // 遍历每一层
    // ...
    const size = q.length;
    for (let i = 0; i < size; i++) {
      // 遍历该层每一个元素，记得弹出
      const ele = q.shift();
      // ... 
      if (ele.left !== null) {
        q.push(ele.left)
      }
      if (ele.right !== null) {
        q.push(ele.right)
      }
    }
  }
}
function invertTree(root) {
  invert(root);
  return;
}
function invert(node) {
  if (node === null) {
    return;
  }
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  invert(node.left);
  invert(node.right);
}

function invertTree1(node) {
  if (node === null) {
    return node;
  }
  invertTree1(node.left);
  invertTree1(node.right);
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
}
var connect = function (root) {
  if (root === null) {
    return root;
  }
  const q = [root];
  while (q.length !== 0) {
    const sz = q.size();
    for (let i = 0; i < sz; i++) {
      if (i + 1 === sz) {
        break;
      }
      const ele = q.shift();
      ele.next = q[0];
      if (ele.left !== null) {
        q.push(ele.left);
      }
      if (ele.right !== null) {
        q.push(ele.right);
      }
    }
  }
  return root;
};

// 返回尾节点，不是null
var flatten = function (node) {
  if (node === null) {
    return null;
  }
  if (node.left === null && node.right === null) {
    return node;
  }
  if (!left) {
    const right = flatten(node.right);
    return right;

  }
  if (!right) {
    const left = flatten(node.left);
    node.left = null;
    node.right = leftTree;
    return left;
  }

  const left = flatten(node.left);
  const right = flatten(node.right);
  const leftTree = node.left;
  const rightTree = node.right;
  node.left = null;
  node.right = leftTree;
  left.right = rightTree;
  return right
};

function flatten1(node) {
  if (node === null) {
    return null;
  }
  flatten(node.left);
  flatten(node.right);

  const right = node.right
  const left = node.left;
  node.right = left
  node.left = null;

  let p = node;
  while (p.right !== null) {
    p = p.right;
  }
  p.right = right;
}

const findMax = (nums) => {
  let max = nums[0];
  let index = 0;
  nums.forEach((item, i) => {
    if (item > max) {
      max = item;
      index = i;
    }
  })
  return [max, index];
}

const traverse = (nums) => {
  if (nums.length === 0) {
    return null;
  }

  const [max, index] = findMax(nums);


  const left = index === 0 ? null : traverse(nums.slice(0, index));
  const right = index === nums.length - 1 ? null : traverse(nums.slice(index + 1));

  const node = new Node(max);
  node.left = left;
  node.right = right;


  return node;
}
const inOrderMap = {};
function build(inOrder, inStart, inEnd, postOrder, postStart, postEnd) {
  const rootValue = postOrder[postEnd];

  const inOrderIndex = inOrderMap[rootValue];
  // const rightTreeLength = inOrder.length - 1 - inOrderMap[rootValue];
  const leftSize = inStart - inOrderIndex;



  const root = new TreeNode(rootValue);
  root.left = build(inOrder, inStart, inOrderIndex - 1, postOrder, postStart, postStart + leftSize - 1); // leftSize 包含了 postStart 这个位置的值，所以 postStart + leftSize 必须要 -1 才能获取真正的
  root.right = build(inOrder, inOrderIndex + 1, inEnd, postOrder, postStart + leftSize + 1, postEnd - 1);

  return root;
}

const arr = [];
var serialize = function (root) {
  traverse2(root)
  return arr.join(',')
};
const traverse2 = (node) => {
  if (node === null) {
    arr.push('#')
    return;
  }
  arr.push(node.val)
  traverse2(node.left);
  traverse2(node.right);
}
// 构建树的过程
var deserialize = function (data) {
  const tree = data.split(',')
  
};