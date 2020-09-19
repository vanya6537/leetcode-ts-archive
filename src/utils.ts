/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function printList(list: ListNode | null): void {
  if (list) {
    const arr = [];
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
    console.log(arr.join(" -> "));
  }
}

export function toNodeList(list: number[]): ListNode | null {
  let rootNode: ListNode | null = null;
  for (const val of list.reverse()) {
    rootNode = new ListNode(val, rootNode);
  }
  return rootNode;
}
