/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 *  TO CHECK DEPTH OF BST ON LEFT AND RIGHT OF each Node
 need the height of each side ? or can we compare in place ?
 order of operations is find if each side is balanced, record the depth, then see if the height difference is no greater than 1.

 how to find the depth of a node for both
each this.left/right is depth
do we have to refer to the parent node?
how do we refer to it


 */


function superbalanced(tree) {

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
