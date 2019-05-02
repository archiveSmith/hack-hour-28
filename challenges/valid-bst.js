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

function validBST(tree) {
    // Assuming tree is the root node of the BST, recursively call validBST to check if the value of the next node
    // is less than current value on the left and greater than current value on the right
    if (tree.left === null && tree.right === null) {
        return;
    }
    if (tree.left.val > tree.val || tree.right.val < tree.val) {
        return false;
    }
    
    if (tree.left !== null && tree.val > tree.left.val) {
        return validBST(tree.left);
    }

    if (tree.right !== null && tree.val < tree.right.val) {
        return validBST(tree.right);
    }
    return true;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
