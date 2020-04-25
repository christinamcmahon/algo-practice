// determine if tree is univalued

var isUnivalTree = function (root) {
    if (!root) return true
    let q = [root]
    while (q.length) {
        for (let i = 0; i < q.length; i++) {
            const node = q.shift() // remove and return first node to be checked
            if (node.left) {
                if (node.val !== node.left.val) {
                    return false
                }
                q.push(node.left)
            }
            if (node.right) {
                if (node.val !== node.right.val) {
                    return false
                }
                q.push(node.right)
            }
        }
    }
    return true
}