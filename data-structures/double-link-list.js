// This program implements a doubly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a single node in a list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Implementation of the doubly linked list
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length > 1) {
      var popVal = this.tail.val;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else if (this.length == 1) {
      var popVal = this.tail.val;
      this.head = null;
      this.tail = null;
    } else return undefined;
    this.length--;
    return popVal;
  }

  shift() {}

  unshift(val) {}

  // Unimplemented features
  get() {}

  set() {}

  insert() {}

  remove() {}

  print() {
    var currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}

let list = new DoublyLinkedList();

for (let i = 0; i < 10; i++) {
  list.push(i);
}
