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
  
  console.log('leftHeight: ', leftHeight);
  console.log('rightHeight: ', rightHeight);

  let diff = Math.abs(leftHeight - rightHeight);
  if(diff > 1 || leftHeight === -1 || rightHeight === -1 ) return - 1;  //This tree is unbalenced or unbalenced tree found somewhere, propogate up

  return Math.max(leftHeight,rightHeight) + 1;
}


function superbalanced(tree) {
  if (tree.left === null && tree.right === null) return true;

  const height = getHeightIfBalenced(tree);

  if(height === -1){
    return false;
  } else {
    return true;
  }
}

// const tree = new BinaryTree(5);


// function insert(bst, value) {
//     // console.log(`Insert Value: ${value}`);
//     if (bst.value > value && bst.left === null) {
//         const node = new BinaryTree(value);
//         bst.left = node;
//     } else if (bst.value > value) {
//         insert(bst.left, value);
//     } else if (bst.value < value && bst.right === null) {
//         const node = new BinaryTree(value);
//         bst.right = node;
//     } else if (bst.value < value) {
//         insert(bst.right, value);
//     }
// }

// function inOrder(tree) {

//     if (tree.left)
//         inOrder(tree.left);

//     console.log(` ${tree.value} `);

//     if (tree.right)
//         inOrder(tree.right);
// }

// insert(tree,3)
// insert(tree,2)
// insert(tree,7)
// insert(tree,8)
// insert(tree,6)
// // insert(tree,1)

// let out = superbalanced(tree);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

