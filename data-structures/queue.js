// This program implements a singly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a node of a list based queue
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Implementation of a list based queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enQueue(val) {
    var newNode = new Node(val);
    if (this.length == 0) this.first = newNode;
    else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.length;
  }

  deQueue() {
    if (this.length == 0) return undefined;
    else {
      if (this.length == 1) this.last == null;
      var removedNodeVal = this.first.val;
      this.first = this.first.next;
      this.length--;
      return removedNodeVal;
    }
  }
}
