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

// function validBST(tree) {
//     console.log(tree.value);
//     if ((tree.left && tree.left.value > tree.value )|| (tree.right && tree.right.value < tree.value)) return false;
//     else if (tree.left) return validBST(tree.left) ;
//     else if (tree.right) return validBST(tree.right);
//     return true;
// }
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
let a = new BinaryTree(6);
let b = new BinaryTree(4);
let c = new BinaryTree(8);
let d = new BinaryTree(2);
let e = new BinaryTree(5);
let f = new BinaryTree(7);
let g = new BinaryTree(9);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
console.log(a);
console.log(validBST(a));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
