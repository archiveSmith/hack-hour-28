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

    let sorted = [];

    //helper function
    function inorderTraversal(node) {
        if (node) {
            inorderTraversal(node.left);
            console.log(node.value);
            sorted.push(node.value);
            inorderTraversal(node.right);
        }
    }

    //do an in order traversal which gives you a sorted array of the nodes

    inorderTraversal(tree);

    console.log(sorted);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] > sorted[i + 1]) {
            return false;
        }
    }

    return true;

}

function validBST(BST) {
    if (BST instanceof BinaryTree === false) return 'bad input';

    /* Create validation helper function
     * INPUT: tree, min, max
     * OUTPUT: boolean
     */
    function isValid(tree, min, max) {
        // Base case: if tree is null, return true as we have reached a leaf successfully
        if (!tree) return true;

        // Current value must be greater than minimum handed down from previous call
        if (tree.value > min &&

            // Current value must be less than maximum handed down from previous call
            tree.value < max &&

            // If both previous checks pass, run isValid on left branch with same min but max = current value
            isValid(tree.left, min, tree.value) &&

            // If both previous checks pass, run isValid on left branch with same max but min = current value
            isValid(tree.right, tree.value, max)) {

            // If all recursive calls return true, then entire tree is valid, so return true!
            return true;
        }

        // If a single comparison fails, return false.
        return false;
    }

    // Begin recursive search with BST, -Infinity and Infinity
    return isValid(BST, -Infinity, Infinity);
}




let a = new BinaryTree(5);
let b = new BinaryTree(3);
let c = new BinaryTree(8);
let d = new BinaryTree(1);
let e = new BinaryTree(4);
let f = new BinaryTree(7);
let g = new BinaryTree(9);

a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.left = f;
c.right = g;


console.log(validBST(a));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };