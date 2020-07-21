// This program implements a singly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a node in a binary search tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Implementation of a binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var insertNode = new Node(val);
    if (this.root === null) this.root = insertNode;
    else {
      var currentNode = this.root;
      // Traverse the tree to find the parent for insertNode
      while (true) {
        if (val < currentNode.val) {
          if (currentNode.left !== null) currentNode = currentNode.left;
          else break; // Correct parent found
        } else {
          if (currentNode.right !== null) currentNode = currentNode.right;
          else break; // Correct parent found
        }
      }
      // currentNode is now the correct parent for insertNode
      if (val < currentNode.val) currentNode.left = insertNode;
      else currentNode.right = insertNode;
      return this;
    }
  }

  contains(val) {
    var currentNode = this.root;
    // Traverse the tree from the root to try find val
    while (true) {
      if (currentNode.val == val) return true;
      // If still possible, continue to traverse the list
      else if (val < currentNode.val) {
        if (currentNode.left !== null) currentNode = currentNode.left;
        else return false; // Not possible to find val
      } else {
        if (currentNode.right !== null) currentNode = currentNode.right;
        else return false; // Not possible to find val
      }
    }
  }
}
