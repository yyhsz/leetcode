/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// 倒数第k个，就是正数第 n - k + 1 个


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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // const m = n + 1;
  // const dummy = new ListNode();
  // dummy.next = head;
  // let p = p1 = head;
  // let i = 0;
  // while (p !== null) {
  //   p = p.next;
  //   i++;
  //   if (i > m) {
  //     p1 = p1.next;
  //   }
  // }
  // p1.next = p1.next.next;

  // return dummy.next;
};
// @lc code=end

