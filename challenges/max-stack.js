/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {}
  this.index = 0;
  this.max;
}

Stack.prototype.push= function(num){
  this.stack[this.index++] = num;
  if(!this.max) this.max = num;
  else if(num > this.max) this.max = num;
  return this.index
}
Stack.prototype.pop = function(){
  let cache = this.stack[this.index - 1];
  delete this.stack[this.index - 1];

  if(cache === this.max){
    this.max = 0;
    for(let index in this.stack){
      if(this.stack[index] > this.max){this.max = this.stack[index]}
    }
  }

  if(this.index !== 0) this.index--
  return cache
}
Stack.prototype.getMax = function (){
  return this.max
}

// stack = new Stack
// console.log(stack)
// console.log(stack.push(0))
// console.log(stack.push(1))
// console.log(stack.push(2))
// console.log(stack.push(3))
// console.log(stack.push(4))
// console.log(stack.push(5))
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.push(0))
// console.log(stack.push(100))
// console.log(stack.push(200))
// console.log(stack.push(201))
// console.log(stack.push(50))
// console.log(stack.push(10))
// console.log(stack.push(2000))
// console.log(stack.push(1000))
// console.log(stack.push(15))
// console.log(stack.push(5000))
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.getMax())


module.exports = Stack;