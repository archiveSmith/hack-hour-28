/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    if(head == null) return head;
    let t1 = head;
    let t2 = null;
    let t2prev;
    while(t1 != null){
        t2prev = t2
        t2 = t1;
        t1 = t1.next
        t2.next = t2prev;
    }
    return t2;
}
 

function makeList(array) {
    let head = new Node(array[0]);
    let curr = head;
    array.forEach((val, index) => {
      if (index === 0) return; //skip first element
      const newNode = new Node(val);
      curr.next = newNode;
      curr = newNode;
    });
    // console.log(head.value);
    return head;
  }
  
  function stringifyList(list) {
    let retval = '';
    while (list != null) {
      retval = retval + list.value + ' ';
      list = list.next;
    }
    return retval;
  }

//   let array = [1,3,4,5,6,7,8,9,0,]
//   let list = makeList(array);

//   console.log(stringifyList(list));
  
//   let out = reverseLinkedList(list)
  
//   console.log(stringifyList(out));
//   out

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
