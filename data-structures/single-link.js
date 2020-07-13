// This program implements a singly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a single node in a list
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// Implementation of the singly linked list
class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		var newNode = new Node(val);
		if (this.length == 0) {
			this.head = newNode; // If list empty, assign newNode to head and tail
		} else {
			this.tail.next = newNode; // Else add newNode to tail of the old tail
		}
		this.tail = newNode;
		this.length++;
		return this;
	}

	pop() {
		if (this.length != 0) {
			// Starting at the head, traverse list until 2nd last element is reached
			this.length--;
			var currentNode = this.head;
			for (let i = 1; i < this.length; i++) {
				currentNode = currentNode.next;
			}
			// Make 2nd last element the new last, assign to this.tail
			currentNode.next = null;
			this.tail = currentNode;
			return this;
		} else return undefined; // Nothing to pop
	}

	shift() {
		if (this.length != 0) {
			this.head = this.head.next;
			this.length--;
			return this;
		} else return undefined; // Nothing to shift
	}

	unshift(val) {
		var newHead = new Node(val);
		if (this.length != 0) {
			// If list is non-empty, assign oldHead as newHead.next
			newHead.next = this.head;
		} else {
			// Else => no oldHead exists, so newHead also becomes tail
			this.tail = newHead;
		}
		this.head = newHead;
		this.length++;
		return this;
	}

	get(index) {
		if (index >= 0 && index < this.length) {
			// Starting at the head, traverse list index many times
			var currentNode = this.head;
			for (let i = 1; i <= index; i++) {
				currentNode = currentNode.next;
			}
			return currentNode;
		} else return undefined; // Index not in list {
	}

	set(index, val) {
		let settingNode = this.get(index);
		if (settingNode != undefined) {
			settingNode.val = val;
			return true; // => Set succsessful
		} else return false; // => Set not succsessful
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		else if (index == this.length) this.push(val);
		else if (index == 0) this.unshift(val);
		else {
			let insertNode = new Node(val);
			insertNode.next = this.get(index);
			this.get(index - 1).next = insertNode;
			this.length++;
		}
		return true;
	}

	// Incomplete methods
	remove() {}
	reverse() {}

	// Utility method/s
	printList() {
		var currentNode = this.head;
		for (let i = 0; i < this.length; i++) {
			console.log(currentNode.val);
			currentNode = currentNode.next;
		}
	}
}

// Test script: generates a list (0, (1, (2, (...)))) for testing on
let list = new SinglyLinkedList();

for (let i = 0; i <= 10; i++) {
	list.push(i);
}
