// This program implements a singly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a list based stack
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var pushNode = new Node(val);
    if (this.size == 0) this.last = pushNode;
    else {
      pushNode.prev = this.last;
      this.last = pushNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.length == 0) return undefined;
    else {
      removedNode = this.last;
      this.last = this.last.prev;
      this.size--;
      return removedNode;
    }
  }
}

// Arrays can be treated like stacks also
