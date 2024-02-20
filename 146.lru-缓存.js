/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function Node(key, val, pre, next) {
  this.pre = pre;
  this.next = next;
  this.key = key;
  this.value = val;
}
// 
function DoubleList() {
  // 两个虚拟节点
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.head.pre = null;
  this.tail.pre = this.head;
  this.tail.next = null;
}
/** 队尾添加元素 */
DoubleList.prototype.add = function (node) {
  node.next = this.tail;
  node.pre = this.tail.pre;
  this.tail.pre.next = node;
  this.tail.pre = node;
}
/** 移除元素 */
DoubleList.prototype.remove = function (p) {
  p.pre.next = p.next;
  p.next.pre = p.pre;
}

/** 移除队头元素 */
DoubleList.prototype.removeHead = function () {
  const p = this.head.next;
  this.remove(p);
  return p;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = {};
  this.doubleList = new DoubleList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map[key]) {
    return -1;
  }
  const node = this.map[key];
  this.doubleList.remove(node);
  this.doubleList.add(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value);
  if (this.map[key]) {
    const node = this.map[key];
    node.value = value;
    this.doubleList.remove(node);
    this.doubleList.add(node);
    return;
  }
  if (this.size === this.capacity) {
    const p = this.doubleList.removeHead();
    this.doubleList.add(node);
    delete this.map[p.key];
    this.map[key] = node;
    return;
  }
  this.doubleList.add(node);
  this.map[key] = node;
  this.size++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
// const arr = [];

const sort = (nums) => {
  if (nums.length === 1) {
    return nums;
  }
  const mid = parseInt((lo + hi) / 2);
  const left = sort(nums.slice(lo, mid + 1));
  const right = sort(nums.slice(mid + 1));
  return merge(left, right);
}
const merge = (left, right) => {
  let arr = [];
  let i = j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  if (i >= left.length) {
    arr.push(...right.slice(j));
  }
  if (j >= left.length) {
    arr.push(...right.slice(i));
  }
}