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

let test = new BinaryTree();

/**
 * Determines the minimum depth of a binary tree node.
 * @param { BinaryTreeNode } node The node to check
 * @return The minimum depth of a binary search tree node
 */

function minDepth(node) {
  if (typeof node === "undefined") return 0;
  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

/**
 * Determines the maximum depth of a binary tree node
 * @param { BinaryTreeNode } node The node to check
 * @return The maximum depth of a binary search tree node
 */

function maxDepth(node) {
  if (typeof node === "undefined") return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

function superbalanced(tree) {
  if (typeof tree === "undefined") return undefined;
  return maxDepth(tree) - minDepth(tree) <= 1;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
