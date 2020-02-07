/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, depth = 1) {
    
    if (root == null) {
        return depth - 1;
    }

    if (!root.left && !root.right) {
        return depth;
    }
    
    let leftDepth = 0;
    let rightDepth = 0;

    if (root.left) {
        leftDepth = maxDepth(root.left, depth + 1);
    }
    
    if (root.right) {
        rightDepth = maxDepth(root.right, depth + 1);
    }

    return leftDepth > rightDepth ? leftDepth : rightDepth;
};