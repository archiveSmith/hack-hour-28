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

function validBST(tree, shouldBeLessThan = null, shouldBeGreaterThan = null) {
    if (tree === null) return true;


    if (shouldBeLessThan)
        if (this.value > shouldBeLessThan) return false;

    if (shouldBeGreaterThan)
        if (this.value < shouldBeGreaterThan) return false;

    let leftValid = validBST(this.left, this.value, null);
    let rightValid = validBST(this.right, null, this.value);

    return (leftValid && rightValid)
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
