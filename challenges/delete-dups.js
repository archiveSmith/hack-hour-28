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



function deleteDups(head) {
  if (head === undefined) return "Undefined";
  if (head.next === null) return head;
  const dupsObj = {};
  let curr = head;
  const holder ={
    start: null,
    end: null
  }
  while (curr) {
    const strNum = curr.value.toString();
    dupsObj.strNum = curr.value
    let nextValue;
    if (curr.next !== null) {
      nextValue = curr.next.value.toString();
    } else {
      const nextValue = 'undefined'
    }
    if (curr.next.value === dupsObj.nextValue) {
      if (holder.start === null) {
        holder.start = curr
      } else {
        holder.next = cur
      }
    }
    if (curr.next.value !== dupsObj.nextValue) {
      if (holder.start !== null && holder.end !== null) {
        holder.start.next = curr.next;
        holder.start = null;
        holder.end = null
      }
      if (holder.start !== null && holder.end === null) {
        holder.start.next = curr.next;
        holder.start = null;
      }
    }
    curr = curr.next;
  }
  return head;
}



const node4 = {
  value: 4,
  next: null
}

const node3 = {
  value: 3,
  next:node4
}
const node2 = {
  value: 2,
  next: node3
}
const node1 = {
  value: 2,
  next: node2
}

const head= {
  value: 1,
  next: node1
}

console.log(deleteDups(head))


module.exports = deleteDups;
