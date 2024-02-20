/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  // 找跟nums2[i]差距最小的，但要求>0，如果没有则用nums1中最小的对位nums2[i]

  const res = [];

  // 用优先级队列记录nums2各元素的index，不用map因为element可能重复
  const priorityQueue = [];
  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    priorityQueue[i] = [i, element];
  }
  priorityQueue.sort((a, b) => a[1] - b[1]) // 排序，使其变成优先级队列

  // nums1 排序
  nums1.sort((a, b) => a - b);

  // 双指针
  let left = 0, right = nums2.length - 1;
  while (priorityQueue.length > 0) {
    const item = priorityQueue.pop()
    const idx = item[0];
    const v = item[1]
    if (nums1[right] > v) {
      res[idx] = nums1[right]
      right--;
    } else {
      res[idx] = nums1[left]
      left++;
    }
  }
  return res;
};
// @lc code=end

