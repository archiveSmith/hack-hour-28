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

function superbalanced(tree) {
  if (!root) return -1;

 const leftHeight = superbalanced(tree.left);
 if (leftHeight === -Infinity) return -Infinity;

 const rightHeight = superbalanced(tree.right);
 if (rightHeight === -Infinity) return -Infinity;

 const heightDiff = Math.abs(leftHeight - rightHeight);
 return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
