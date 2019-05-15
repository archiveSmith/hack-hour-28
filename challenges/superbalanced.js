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
  this.checkHeight = (left = 0, right = 0) => {
    let potentialHeightLeft = left;
    let potentialHeightRight = right;
    if(this.left) potentialHeightLeft = this.left.checkHeight(left + 1, right);
    if (this.right) potentialHeightRight = this.right.checkHeight(left, right + 1);
    return Math.max(potentialHeightLeft, potentialHeightRight)
  };
}

function superbalanced(tree) {
  //check height of left of tree
  const leftHeight = tree.left.checkHeight();
  //check height of right of tree
  const rightHeight = tree.right.checkHeight();
  //max height of left/right can only be one more than opposite
  if(leftHeight > rightHeight) return leftHeight - rightHeight <= 1;
  else if(leftHeight < rightHeight) return rightHeight - leftHeight <= 1;
  else return true;


}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
