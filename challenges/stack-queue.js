/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  let newArr = [];

  this.push = function(element)
  {
    newArr.push(element);
    return newArr.length;
  }

  this.pop = function()
  {
    let rev = newArr.pop();
    return  rev;
  }

}


/**
* Queue Class
*/

function Queue() {
   let stack1 = new Stack();
   let stack2 = new Stack();

   this.enqeue = function(element)
   {
     let firstUp = stack1.push(element);
     return firstUp;
   }

   this.dequeue = function()
   {
     let ele = stack2.push(stack1.pop());
     return ele;
   }

}

/*let keke = new Queue;
keke.enqeue('1');
keke.enqeue('2');
keke.enqeue('3');

console.log(keke.enqeue('4'));
console.log(keke.dequeue());
console.log(keke.dequeue());*/


module.exports = {Stack: Stack, Queue: Queue};
