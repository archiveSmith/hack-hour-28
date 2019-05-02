/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

let head = new BinaryTree(8, new BinaryTree(9, null, null), new BinaryTree(10, new BinaryTree(9, null, null), new BinaryTree(14, new BinaryTree(13, null, null), null)));

function validBST(tree) {
    if (tree.left === null && tree.right === null) return true;
    else if (tree.left.value > tree.value || tree.right.value < tree.value) {
        return false;
    }
    else {
        if (tree.left === null) { return validBST(tree.right); }
        else if (tree.right === null) { return validBST(tree.left); }
        else { return (validBST(tree.left) && validBST(tree.right)); }
    }

}

console.log(validBST(head))

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
