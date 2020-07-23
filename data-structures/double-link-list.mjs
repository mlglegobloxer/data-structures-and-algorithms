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
      // First item on list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Not first item on list
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length > 1) {
      // Remove last, of more items on list
      var popVal = this.tail.val;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else if (this.length == 1) {
      // Remove only item on list
      var popVal = this.tail.val;
      this.head = null;
      this.tail = null;
    } else return undefined; // Empty list
    this.length--;
    return popVal;
  }

  shift() {
    if (this.length > 1) {
      // Remove first, of more items on list
      var shiftVal = this.head.val;
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.length == 1) {
      // Remove only item on list
      var shiftVal = this.tail.val;
      this.head = null;
      this.tail = null;
    } else return undefined; // Empty list
    this.length--;
    return shiftVal;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length == 0) {
      // First item on list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Not first item on list
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Unimplemented features
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
      insertNode.prev = this.get(index - 1);
      this.get(index - 1).next = insertNode;
      this.get(index + 1).prev = insertNode;
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
      var nodeAfter = this.get(index + 1);
      var nodeToRemove = nodeBefore.next;
      nodeBefore.next = nodeAfter;
      nodeAfter.prev = nodeBefore;
      this.length--;
      return nodeToRemove.val;
    }
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
//let list = new DoublyLinkedList();
//
//for (let i = 0; i < 10; i++) {
//  list.push(i);
//}

// Export for use in other modules
export default DoublyLinkedList;
