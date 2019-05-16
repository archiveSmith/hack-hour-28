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
  //empty tree
  if(!tree || (tree.left == null && tree.right == null)) {
    return true;
  }

  if(!tree.isBalanced()) return false;

  if(Math.abs(height(tree.right) - height(tree.left)) > 1) return false;

  return true;
}

BinaryTree.prototype.isBalanced = function () {
  if(this.left) {
    if(this.left.value > this.value) return false;
    if(!this.right) return this.left.isBalanced();
  }
  if(this.right) {
    if(this.right.value < this.value) return false;
    if(!this.left) return this.right.isBalanced();
  }
  if(!this.right && !this.left) return true;

  return this.right.isBalanced() && this.left.isBalanced();
}

function height (tree) {
  if(!tree) return 0;
  let q = [tree];
  let h = 0;
  let children = [];
  while(q.length > 0) {
    while(q.length > 0) {
      let node = q.pop();
      if(node.left) children.push(node.left);
      if(node.right) children.push(node.right);
      console.log(node.value);
    }

    q = children;
    children = [];
    h++; console.log(h);
  }
  return h;
}



BinaryTree.prototype.add = function (value) {
  if(value < this.value) {
    if(this.left) {
      return this.left.add(value);
    } else {
      this.left = new BinaryTree(value);
    }
  } else if(value > this.value) {
      if(this.right) {
        return this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
  }
}

let a = new BinaryTree(5);
a.add(3);
a.add(6);
a.add(7);
a.add(2);
a.add(4);
a.add(1);
a.add(-1);
a.add(-2);
a.add(-3);
a.add(-4);
//console.log(height(a));

console.log(superbalanced(a));
a.left.value = 10;
console.log(superbalanced(a));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
