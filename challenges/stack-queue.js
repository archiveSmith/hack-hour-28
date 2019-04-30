/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	return [...arguments]
}

function Queue() {
	const stackOne = Stack();
	const stackTwo = Stack();

	function enqueue(el) {
		stackOne.push(el);
	}
	function dequeue() {
		if (stackTwo.length === 0) {
			if (stackOne.length === 0) {
				return 'Queue is empty';
			}
			while (stackOne.length > 0) {
				let popEl = stackOne.pop();
				stackTwo.push(popEl);
			}
			return stackTwo.pop();
		}
	}
}

console.log(Stack(5))
module.exports = { Stack: Stack, Queue: Queue };
