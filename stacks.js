// stack implementation via an array

class Stack {
	constructor() {
		this.items = [];
	}
	// push element into stack
	push(element) {
		this.items.push(element);
	}
	// remove the element at the top of the stack
	pop(element) {
		if (this.items.length == 0) {
			return "Underflow";
		}
		return this.items.pop();
	}
	// look at the top item of the stack
	peek() {
		return this.items[this.items.length - 1];
	}
	// check if stack is empty
	isEmpty() {
		return this.items.length == 0;
	}
	// print out the contents of the stack
	printStack() {
		let printedStack = "";

		for (let i = 0; i < this.items.length; i++) {
			printedStack += this.items[i] + " ";
		}
		return printedStack;
	}
}