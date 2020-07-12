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
      // If list is empty, assign the new node to both head and tail
      this.head = newNode;
    } else {
      // Else add the new node to the tail of the list
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length != 0) {
      // Starting at the head, traverse the list until 2nd last element is reached
      this.length--;
      var currentNode = this.head;
      for (let i = 1; i < this.length; i++) {
        currentNode = currentNode.next;
      }
      // Make 2nd last element the new last, assign to this.tail
      currentNode.next = null;
      this.tail = currentNode;
      return this;
    } else {
      return undefined; // Nothing to pop
    }
  }

  shift() {
    if (this.length != 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    } else {
      return undefined; // Nothing to shift
    }
  }

  unshift(val) {
    var newHead = new Node(val);
    if (this.length != 0) {
      // If list is non-empty, assing oldHead as newHead.next
      newHead.next = this.head;
    } else {
      // Else => no oldHead exists, so newHead also becomes tail
      this.tail = newHead;
    }
    this.head = newHead;
    this.length++;
    return this;
  }
}
