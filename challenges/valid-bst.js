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

function validBST(tree,  shouldBeGreaterThan = null,shouldBeLessThan = null) {
    if (tree == null) return true;

    console.log(`Checking node: ${tree.value}`);

    if (shouldBeLessThan) {
        console.log(`should be less than ${shouldBeLessThan}`)
        if (tree.value > shouldBeLessThan) {
            console.log(`FAIL: ${shouldBeLessThan} is less than ${tree.value}`);
            return false;
        }
    }

    if (shouldBeGreaterThan) {
        console.log(`Should be greater than ${shouldBeGreaterThan}`);
        if (tree.value < shouldBeGreaterThan) {
            console.log(`FAIL: ${shouldBeGreaterThan} is greater than ${tree.value}`);
            return false;
        }
    }
    let leftValid = validBST(tree.left, shouldBeGreaterThan, tree.value, );
    let rightValid = validBST(tree.right, tree.value, shouldBeLessThan);

    return (leftValid && rightValid)
}

// function insert(bst, value) {
//     console.log(`Insert Value: ${value}`);
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

// function makeBadTree(bst, value) {
//     if (bst.value > value && bst.left === null) {
//         const node = new BinaryTree(value);
//         bst.left = node;
//     } else if (bst.value < value) {
//         makeBadTree(bst.left, value);
//     } else if (bst.value < value && bst.right === null) {
//         const node = new BinaryTree(value);
//         bst.right = node;
//     } else if (bst.value > value) {
//         makeBadTree(bst.right, value);
//     }
// }

// function inOrder(tree) {

//     if (tree.left)
//         inOrder(tree.left);

//     console.log(` ${tree.value} `);

//     if (tree.right)
//         inOrder(tree.right);
// }

// const tree = new BinaryTree(5);

// let out = validBST(tree);

// console.log(`Single Node Tree: ${out}`);
// insert(tree, 3)
// insert(tree, 7)
// insert(tree, 2)
// insert(tree, 9)
// insert(tree, 8)
// out = validBST(tree);

// console.log(`Multi Node Tree: ${out}`);

// inOrder(tree);

// const badTree = new BinaryTree(5);
// insert(badTree, 3)
// insert(badTree, 7)
// makeBadTree(badTree, 2);
// insert(badTree, 9)
// insert(badTree, 8)

// inOrder(badTree);

// console.log(validBST(badTree));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
