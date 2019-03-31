/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let order = [];
var levelOrder = function(root) {
    order = []
    t(root, 0);
    return order;
};

function t(root, level) {
    if (!root) return;
    
    order[level] = order[level] || [];
    order[level].push(root);
    
    if (root.left) {
       t(root.left, level + 1);
    }
    
    if (root.right) {
        t(root.right, level + 1);
    }

}

levelOrder(t);