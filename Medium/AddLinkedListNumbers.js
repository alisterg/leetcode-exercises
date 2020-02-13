/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Adds two numbers, each of which are represented by linked 
 * lists (with each node representing a digit)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let listOneNumber = convertListToNumberString(l1);
    let listTwoNumber = convertListToNumberString(l2);

    let finalValue = BigInt(listOneNumber) + BigInt(listTwoNumber);
    finalValue = finalValue.toString().split('');

    return convertNumberArrayToLinkedList(finalValue.reverse());
};

function convertListToNumberString(list, acc = "") {
    if (!list.next) {
        let final = acc + list.val;

        if (!final) {
            return 0;
        }

        return final.split('').reverse().join('');
    }
    
    return convertListToNumberString(list.next, acc + list.val);
}

/**
 * Converts an array representing a single integer into a 
 * reversed linked list (with each node representing a digit)
 * @param {Array} numbers eg. [1,2,3] represents 123
 */
function convertNumberArrayToLinkedList(numbers) {
    
    let node = null;

    for (let i = numbers.length - 1; i >= 0; i--) {
        let next = node;
        node = new ListNode(numbers[i]);
        node.next = next;
    }

    return node;
}