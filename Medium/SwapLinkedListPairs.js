/**
 * Swap each pair in a linked list
 * @param {ListNode} head 
 */
const swapPairs = function(head) {
    if(!head || !head.next) return head;

    let tmp1 = head;
    let tmp2 = head.next;
    let tmp3 = tmp2.next;
    
    tmp2.next = tmp1;
    tmp1.next = swapPairs(tmp3);

    return tmp2;
};
