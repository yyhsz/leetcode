/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const t = lists.reduce((pre, next) => {
    const dummy = new ListNode();
    let p = dummy;
    let p1 = pre, p2 = next;
    while (p1 !== null && p2 !== null) {
      if (p1.val < p2.val) {
        p.next = p1;
        const temp = p1;
        p1 = p1.next;
        temp.next = null;
      } else {
        p.next = p2;
        const temp = p2;
        p2 = p2.next;
        temp.next = null;
      }
      p = p.next;
    }
    if (p1 === null) {
      p.next = p2;
    }
    if (p2 === null) {
      p.next = p1;
    }
    return dummy.next;
  }, null);
  return t;
};
// @lc code=end

