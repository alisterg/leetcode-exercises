/*
 * Work backwards from the end, swapping the
 * previous node with the next node.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    let newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};