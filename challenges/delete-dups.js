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

// Doing this with a helper obj is trivial, skipped right to the O(1) space solution
// For some reason I was convinced I needed to keep track of the length of the list 
// and use that to keep track of which elements I was looking at.

// still O(n^2) but more like 3n^2 
 
function deleteDups(head) {

    let length = 0;
    curr = head;
    if (head === null) return;
    while (curr !== null) {  //traverse list to find out how long we need to go
        length++
        curr = curr.next;
    }

    // looking back I realized I didn't need to keep track of things with a for loop
    // a pointer would have been fine and not require an extra traversal.
    for (let i = 0; i < length; i++) {

        //get value of i-th thing in list
        curr = head;
        position = 0;
        valToRemove = null;
        while (curr !== null) {
            if (position === i) {
                valToRemove = curr.value;
                break;
            }
            curr = curr.next;
            position++;
        }

        //remove any repeats from the list - can start at curr
        prev = curr;
        if (curr) curr = curr.next;
        while (curr !== null) {
            // console.log(`Looking at: ${curr.value}`);
            if (curr.value === valToRemove) {
                // console.log(`Found ${valToRemove} - cutting out`);
                prev.next = curr.next;

                //keep removing nodes if their value is the same
                while (curr.next && curr.next.value === valToRemove) {
                    prev.next = curr.next.next;
                    curr = curr.next
                    length--; //this works fine with out this decrement so its not needed, just results in some extra loops through the list without it.
                }
                length--; //in a 10,000 element list taking down the length drops runtime from 103ms to 54ms.
            }
            prev = curr;
            curr = curr.next;
            // console.log('');
            // console.log(stringifyList(head));
        }

    }
    return head;
}

// Nested loops - taken from solution
// This is the proper way to do it in a space conscious way
// But for some reason this method dies when process large lists (> 10,000)
// *EDIT* found it! The error comes when the last element of the list is duplicated earlier in the list.
// can be verified by looking the list: { 2-> 4-> 2 } or { 2-> 2}
function deleteDupsLoops(head) {
    var inner;
    let count = 0;
    console.log("Start Loops");

    for (var outer = head; outer.next; outer = outer.next) {
        inner = outer;
        while (inner.next) {
            count++;
            if (outer.value === inner.next.value) {
                inner.next = inner.next.next;
            } else {
                inner = inner.next;
            }
        }
    }
}


// helper functions for testing
function makeArray(size,range = 100) {
    const newArr = [];
    for (let i = 0; i < size; i++) {
        newArr.push(Math.floor(Math.random() * 2 * range) - range) //random number between -range and range
    }
    return newArr;
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

function checkNoDups(list) {
    const head = list;
    let curr = head;
    const set = new Set();
    let size = 0;
    while (curr) {
        set.add(curr.value);
        size++;
        curr = curr.next;
    }
    // console.log(`size:${size} setSize:${set.size}`);
    // console.log(set);
    // console.log(list);
    return size - set.size;
}

// array = makeArray(25,4);
array = [1,2,4,4,4,4,4,4,2];
list = makeList(array);


console.log('stringifyList(list): ', stringifyList(list));

console.log(array.length);
console.time("loops");
console.log('');
console.log('');
console.log('');

deleteDupsLoops(list);

console.timeEnd("loops");

// console.time("mein");
// deleteDups(list2);

// console.timeEnd("mein");



module.exports = deleteDups;
