import { ListNode } from "@src/utils";

function reversed(str: string): string {
  return str.split("").reverse().join("");
}

function numberAsReversedListNode(num: bigint | number): ListNode {
  let lstAns: ListNode | null = null;
  const numberAsString: string = num.toString();
  for (let i = 0; i < numberAsString.length; i++) {
    lstAns = new ListNode(Number(numberAsString[i]), lstAns);
  }
  return lstAns!;
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) return l1 || l2;

  let l1Str = "";
  let l2Str = "";

  while (l1) {
    l1Str += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    l2Str += l2.val;
    l2 = l2.next;
  }

  l1Str = reversed(l1Str);
  l2Str = reversed(l2Str);
  return numberAsReversedListNode(BigInt(l1Str) + BigInt(l2Str));
}
