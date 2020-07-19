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
    } else return undefined; // Index not in list
  }

  set(index, val) {
    var settingNode = this.get(index);
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
      var insertNode = new Node(val);
      insertNode.next = this.get(index);
      this.get(index - 1).next = insertNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index == this.length - 1) return this.pop();
    else if (index == 0) return this.shift();
    else {
      var nodeBefore = this.get(index - 1);
      var nodeToRemove = nodeBefore.next;
      nodeBefore.next = nodeToRemove.next; // Skip node to be removed
      this.length--;
      return nodeToRemove.val;
    }
  }

  reverse() {
    if (this.length == 0) return this;
    var prev = null,
      curr = this.head,
      next = this.head.next;

    this.tail = new Node(this.head.val);
    for (let i = 1; i < this.length; i++) {
      prev = curr;
      curr = next;
      next = curr.next;
      curr.next = prev;
    }
    this.head = curr;
    return this;
  }

  print() {
    var currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}

// Test script: generates a list (0, (1, (2, (...(10, null))))) for testing on
// let list = new SinglyLinkedList();
//
// for (let i = 0; i <= 10; i++) {
//   list.push(i);
// }
