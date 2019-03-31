function PrintFromTopToBottom(root)
{
    // write code here
    if (!root) return [];
    
    const nodesToSearch = [root];
    
    while (nodesToSearch.length !== 0) {
        node = nodesToSearch.shift();
        console.log(node.val);
        if (node.left) nodesToSearch.push(node.left);
        if (node.right) nodesToSearch.push(node.right);
    }
}

const root = {val: 0, left: {val: 1}, right: {val: 2}}

PrintFromTopToBottom(root);