/**
 * Definition for singly-linked list.
 */
export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function getDecimalValue(head: ListNode | null): number {
    const stringVersion = parseListIntoString(head, "0");
    return parseInt(stringVersion, 2);
}

function parseListIntoString(head: ListNode | null, result: string): string {
    if (head === null) return result;
    if (head.next === null) return result + head.val;

    return parseListIntoString(head.next, result + head.val);
}