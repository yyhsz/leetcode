/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummy1 = new ListNode(), dummy2 = new ListNode();
  let p1 = dummy1, p2 = dummy2;
  let p = head;

  while (p !== null) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    const temp = p;
    p = p.next;
    temp.next = null;
  }

  p1.next = dummy2.next;

  return dummy1.next;
};
// @lc code=end



// let p = head;
// const dummy1 = new ListNode();
// const dummy2 = new ListNode();
// let p1 = dummy1, p2 = dummy2;
// while (p !== null) {
//   if (p.val < x) {
//     p1.next = p;
//     p1 = p1.next
//   } else {
//     p2.next = p;
//     p2 = p2.next;
//   }
//   // 最重要的是把原链表断开
//   const temp = p.next;
//   p.next = null;
//   p = temp;
// }
// p1.next = dummy2.next;
// return dummy1.next;
