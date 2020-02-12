/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let listOneNumber = convertListToNumberString(l1);
    let listTwoNumber = convertListToNumberString(l2);

    let finalValue = +listOneNumber + +listTwoNumber;
    finalValue = finalValue.toString().split('').reverse();

    // TODO convert back to linked list
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

function convertNumberArrayToLinkedList(numbers) {
    

    // for (let i = 0; i < numbers.length; i++) {
    //     let currentNode = new ListNode(numbers[i]);
    //     currentNode.next = numbers[i + 1]
    // }
}