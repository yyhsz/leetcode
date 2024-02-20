/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let next = null;
var reverseBetween = function (head, left, right) {
  if (head.next === null) {
    return head;
  }
  let p = head;
  let i = 0;
  while (i < left - 1) {
    p = p.next;
    i++;
  }
  const last = reverseN(p, right - left + 1)
  p.next.next = next;
  p.next = last;
  return head;
};
function reverseN(head, n) {
  if (n === 1) {
    next = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = next;
  return last;
}
// @lc code=end

