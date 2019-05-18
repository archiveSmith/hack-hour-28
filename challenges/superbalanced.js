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
function heightOrUnbalanced(tree) {
  if (!tree) return 0;
  if (tree.right === null && tree.left === null) return 1;
  const left = heightOrUnbalanced(tree.left);
  const right = heightOrUnbalanced(tree.right);
  if (right === false || left === false) return false;
  if (Math.abs(left - right) > 1) return false;
  return Math.max(right, left) + 1;
}
function superbalanced(tree) {
  return !!heightOrUnbalanced(tree);
}

// function superbalanced(tree) {}

function insert(bst, value) {
  // console.log(`Insert Value: ${value}`);
  if (bst.value > value && bst.left === null) {
    const node = new BinaryTree(value);
    bst.left = node;
  } else if (bst.value > value) {
    insert(bst.left, value);
  } else if (bst.value < value && bst.right === null) {
    const node = new BinaryTree(value);
    bst.right = node;
  } else if (bst.value < value) {
    insert(bst.right, value);
  }
}

let a = new BinaryTree(5);
insert(a, 4);
insert(a, 3);
insert(a, 6);
insert(a, 8);
insert(a, 9);

console.log(a);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
