/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

//given
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function heightOrUnbalanced(tree) {
  //take care of edge cases
  if (tree === null) return 0;
  if (tree.left && tree.right === null) return 1;
  //find height of left
  const left = heightOrUnbalanced(tree.left);
  const right = heightOrUnbalanced(tree.right);
  if (right === false || left === false) return false;
  if (Math.abs(left - right) > 1) return false;
  return Math.max(right, left) + 1;
}

//given
function superbalanced(tree) {
  return !!(heightOrUnbalanced(tree));
}


/*
const BST = {
  left:{
    left: {
      left: null,
      right: null
    }
  },
  right: {
    left: null,
    right: null
  }
}
*/

function insert(bst, value) {
  //console.log(`Insert Value: ${value}`);
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

//Use func insert to make binary search tree
const bst = new BinaryTree(3)
insert(bst, 4);
insert(bst, 2);
insert(bst, 1);
insert(bst, 5);



console.log(superbalanced(bst))

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
