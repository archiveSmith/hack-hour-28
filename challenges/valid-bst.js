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
    if (tree == null) return true;

    if (shouldBeLessThan)
        if (this.value > shouldBeLessThan) return false;

    if (shouldBeGreaterThan)
        if (this.value < shouldBeGreaterThan) return false;

    let leftValid = validBST(this.left, this.value, null);
    let rightValid = validBST(this.right, null, this.value);

    return (leftValid && rightValid)
}

function insert(bst, value) {
    if (bst.value > value && bst.left === null) {
        const node = new BinaryTree(value);
        bst.left = node;
    } else if (bst.value > value) {
        insert(bst.left);
    } else if (bst.value < value && bst.right === null) {
        const node = new BinaryTree(value);
        bst.right = node;
    } else if (bst.value < value) {
        insert(bst.right);
    }
}

function inOrder(tree) {
    if (tree.left)
        inOrder(tree.left);

    console.log(` ${tree.value} `);

    if (tree.right)
        inOrder(tree.right);
}

const tree = new BinaryTree(5);

let out = validBST(tree);

console.log(`Single Node Tree: ${out}`);

insert(tree, 3)
insert(tree, 7)
insert(tree, 2)
insert(tree, 9)
insert(tree, 8)
 out = validBST(tree);

console.log(`Multi Node Tree: ${out}`);

inOrder(tree);


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
