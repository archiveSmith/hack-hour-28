/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(int, head) { // only return second to last, no Nth to last

//   let previous = null;

//   function check(obj){
//     if(previous === null) previous = obj;

//     if(obj.next) {
//       previous = obj;
//       return check(obj.next)
//     }

//     if(obj.next === null) return previous.value
//   }

//   return check(head)
// }


function kthToLastNode(int, head) { 

  let previous = [];

  function check(obj){

    if(previous.length !== int) {
      previous.push(obj);
    } else if (previous.length === int) {
      previous.shift();
      previous.push(obj)
    }
    if(obj.next) {
      return check(obj.next)
    }
    if(obj.next === null && previous.length !== int) return undefined
    if(obj.next === null) return previous[0].value
  }

  return check(head)
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

console.log(kthToLastNode(20, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
