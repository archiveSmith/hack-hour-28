/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

var Node = function (value) {
    this.value = value;
    this.next = null;
  }

function deleteDups(head) {
    let length = 0;
    curr = head;
    if(head === null) return;
    // console.log('get Length');
    while( curr !== null){  //traverse list to find out how long we need to go
        length++
        curr = curr.next;
    }
    // console.log(`Length is ${length}`);

    // console.log('Get value of ith node');
    for (let i = 0; i < length; i++) {
        // console.log(`i:${i}   length:${length}`);
        //get value of i-th thing in list
        curr = head;
        position = 0;
        valToRemove = null;
        while(curr !== null){
            if(position === i ){ 
                valToRemove = curr.value;
                break;
            }
            curr = curr.next;
            position++;
        }

        // console.log(`Looking for ${valToRemove}`);
        //remove any repeats from the list - can start at curr
        prev = curr;
        if(curr) curr = curr.next;
        while(curr !== null){
            if(curr.value === valToRemove){
                // console.log(`Found ${valToRemove} - cutting out`);
                prev.next = curr.next;

                length--;                
            }
            prev = curr;
            curr = curr.next;
            // console.log('');
            // console.log(stringifyList(head));
        }
        
    }
    return head;
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

array = [1,2,3,4,5,3,6,6,7,3]
list = makeList(array);

// console.log(stringifyList(list));

deleteDups(list);

// console.log(stringifyList(list));



module.exports = deleteDups;
