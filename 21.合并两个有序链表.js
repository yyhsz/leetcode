/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
// 对于链表的问题，可以多用指针去记录位置（索引）
// 用dummy去处理避免空指针的情况，降低复杂度

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let p = dummy;
  let p1 = list1, p2 = list2;
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      p.next = p1;
      p = p.next;
      const temp = p1;
      p1 = p1.next;
      temp.next = null;
    } else {
      p.next = p2;
      p = p.next;
      const temp = p2;
      p2 = p2.next;
      temp.next = null;
    }
  }
  if (p1 === null) {
    p.next = p2
  }
  if (p2 === null) {
    p.next = p1
  }
  return dummy.next;
};
// @lc code=end




// let dummy = p = new ListNode();
// let p1 = list1, p2 = list2; //
// while (p1 !== null && p2 !== null) {
//   if (p1.val < p2.val) {
//     p.next = p1;
//     p1 = p1.next;
//   } else {
//     p.next = p2
//     p2 = p2.next
//   }
//   p = p.next;
// }
// if (p1 === null) {
//   p.next = p2
// }
// if (p2 === null) {
//   p.next = p1
// }
// return dummy.next
