// Given the root node of a BST and a value, find and return the node in the BST

var searchBST = function (root, val) {
    while (root && root.val !== val) {
        root.val > val ? root = root.left : root = root.right
    }
    return root
};