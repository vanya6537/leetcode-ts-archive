import { ListNode } from "@src/utils";

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if ((l1 === l2) === null) return null;
  if (l1 === null || l2 === null) return l1 || l2;

  let rootNode: ListNode;
  if (l1.val < l2.val) {
    rootNode = l1;
    l1 = l1.next;
  } else {
    rootNode = l2;
    l2 = l2.next;
  }
  let tailNode: ListNode | null = rootNode;

  while ((l1 || l2) && tailNode) {
    let nextTmp: ListNode | null;
    if (l1 && (l2 === null || l1.val < l2.val)) {
      nextTmp = l1.next;
      l1.next = l2;
      tailNode.next = l1;
      l1 = nextTmp;
    } else if (l2) {
      nextTmp = l2.next;
      l2.next = l1;
      tailNode.next = l2;
      l2 = nextTmp;
    }
    tailNode = tailNode.next;
  }

  return rootNode;
}
