// queue implementation via an array

class Queue {
	constructor() {
		this.items = [];
	}
	// add an element to the queue
	enqueue(element) {
		this.items.push(element);
	}
	// remove an element from the queue
	dequeue() {
		if (this.isEmpty()) {
			return "Underflow";
		}
		return this.items.shift();
	}
	// returns the front of the queue
	front() {
		if (this.isEmpty()) {
			return "No elements in the queue."
		}
		return this.items[0];
	}
	// check if queue is empty
	isEmpty() {
		return this.items.length == 0;
	}
	// prints out the queue
	printQueue() {
		let printedQueue = "";

		for (let i = 0; i < this.items.length; i++) {
			printedQueue += this.items[i] + " ";
		}
		return printedQueue;
	}
}

// queue implementation via two stacks

class doubleStackQueue {
	constructor() {
		this.pushStack = [];
		this.popStack = [];
		this.size = 0;
	}
	// adds an element to the queue
	enqueue(element) {
		this.pushStack.push(element);
		this.size++;
	}
	// removes an element from the queue
	dequeue() {
		if (this.popStack.length == 0) {
			while (this.pushStack.length > 0) {
				this.popStack.push(this.pushStack.pop())
			}
		}
		this.size--;
		return this.popStack.pop();
	}
	// check the front of the queue
	front() {
		if (this.popStack.length > 0) {
			return this.popStack[this.popStack.length - 1];
		}
		return this.pushStack[0];
	}
	// return size of queue
	size() {
		return this.size;
	}
	// check if queue is empty
	isEmpty() {
		return this.size == 0;
	}
}