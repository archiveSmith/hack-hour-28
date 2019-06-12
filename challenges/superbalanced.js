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
  // Write a helper function to recursively call on as long as this.left and this.right are not null
  // Declare an empty object to store key: value pairs that correspond to the node's value and depth
  let counterObj = {};
  // helperFunc will accept two arguments - the node, and the depth of the node
  function goDeeper(node, depth = 0) {
    depth++;
    if (node.left === null && node.right === null) { counterObj[node.value] = depth; return; }
    if (node.left !== null) return goDeeper(node.left, depth);
    if (node.right !== null) return goDeeper(node.right, depth);
  }
  // Invoke helper function
  goDeeper(tree);
  // Extract values from counterObj
  const objValues = Object.values(counterObj);
  objValues.sort((a, b) => a - b);

  if (objValues[length - 1] - objValues[0] > 1) { return false } else { return true }

}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
