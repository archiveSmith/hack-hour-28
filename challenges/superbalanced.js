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
  //counting each side
  let countLeft = 0;
  let countRight = 0;

  //traverse
  if(this.value === null) {
    return true;
  } else if(this.value < tree && this.right !== null) {
    countRight++;
  }

  if(this.value === null) {
    return true;
  } else if(this.value > tree && this.left !== null) {
    countLeft++;
  }
  
  let difference = 0;
  if(countLeft > countRight){
    difference = countLeft - countRight;
  } else {
    difference= countRight - countLeft;
  }

  if(difference >= 2){
    return true;
  }
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
