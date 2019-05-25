/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  //get l1 into an array
 // get number of items in linked list (n)
let arr1 = [];
let cur = l1;
for (let i = 0 ; i < 3 ; i++){
  arr1.push(cur.value);
  cur = cur.next
  }
  
// get l2 into an array
let arr2 = [];
let cur2 = l2;
console.log(cur2)
for (let i = 0 ; i < 3 ; i++){
  arr2.push(cur2.value);
  console.log(arr2)
  cur2 = cur2.next
  }

  
let sumArr = [];
  
for (let i = 0 ; i < arr1.length ; i++){
  sumArr.push(arr1[i] + arr2[i])
  
	}
  console.log(sumArr)
  let final = '';
  for (let i = sumArr.length-1 ; i >= 0 ; i--){
    if (sumArr[i] < 10) final.concat(sumArr[i]);
    else {
      let digits = sumArr[i].toString()
      final.concat(digits[i])
    }
    console.log(final)
  }
}

//creating l1
const node11 = new Node(2)
const node12 = new Node(1)
const node13= new Node(5)
node11.next = node12;
node12.next= node13;

//creating l2
const node21 = new Node(5);
const node22 = new Node(9);
const node23 = new Node(2);
node21.next = node22;
node22.next = node23;


// console.log(node11);
// console.log(node21);

console.log(addLinkedList(node11, node21)); 

//recursive attyempt 
// function list1(l1, l2, cur=l1 arr1= []){
//   if (cur.next === null) return arr1;
//   console.log(cur)
//   console.log(arr1)
//   arr1.push(cur.value);
//   return list1(l1, l2, cur.next, cur.next, arr1)