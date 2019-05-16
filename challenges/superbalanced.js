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

// returns height of tree - will return -1 if a sub tree is unbalenced
function getHeightIfBalenced(tree) {
  let leftHeight = (tree.left) ? getHeightIfBalenced(tree.left) : 0;
  let rightHeight = (tree.right) ? getHeightIfBalenced(tree.right) : 0;

  let diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1 || leftHeight === -1 || rightHeight === -1) return - 1;  //This tree is unbalenced or unbalenced tree found somewhere, propogate up

  return Math.max(leftHeight, rightHeight) + 1;
}


function superbalanced(tree) {
  if (tree.left === null && tree.right === null) return true;

  const height = getHeightIfBalenced(tree);

  if (height === -1) {
    return false;
  } else {
    return true;
  }
}

const tree = new BinaryTree(50);


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



function inOrder(tree, str = '') {
  
  if (tree.left)
  str = inOrder(tree.left, str);
  
  // console.log(` ${tree.value} `);
  str = `${str} ${tree.value}`

  if (tree.right)
    str = inOrder(tree.right, str);

return str
}
function preOrder(tree, str = '') {
  // console.log(` ${tree.value} `);
  str = `${str} ${tree.value}`

  if (tree.left)
    str = preOrder(tree.left, str);


  if (tree.right)
    str = preOrder(tree.right, str);

return str
}


function height(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced2(tree) {
  if (tree === null) return true;
  return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced2(tree.left) && superbalanced2(tree.right);
}

insert(tree, 30)
insert(tree, 75)
insert(tree, 12)
insert(tree, 45)
insert(tree, 83)
insert(tree, 66)
// insert(tree, 6)
// insert(tree,1)
console.time("mein")
let out = superbalanced(tree);
console.timeEnd("mein")

out

console.time("theres")
superbalanced2(tree);
console.timeEnd("theres")

let inOrd = inOrder(tree);
let pre = preOrder(tree);

inOrd
pre

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

