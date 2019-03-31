/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function ifLeaf(node) {
    return !node.left && !node.right;
}

function runner(root, exp) {
    const visited = [];
    const find = [];
    FindPath(root, exp, visited, find);
    return find;
} 

function FindPath(root, expectNumber, visited, find)
{
    if (!root) return [];
    if (ifLeaf(root) && root.val === expectNumber) {
        find.push([...visited, root.val]);
        return;
    }
    
    // write code here
    if (root.val < expectNumber) {
        visited.push(root.val);
        if(root.left) FindPath(root.left, expectNumber - root.val, visited, find);
        if(root.right) FindPath(root.right, expectNumber - root.val, visited, find);
        visited.pop();
    } else {
        return false;
    }
    
    return find;
}
module.exports = {
    FindPath : runner
};