// This program implements a singly linked list
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

import Queue from "./queue.mjs";

let q = new Queue();

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
      // If still possible to find val, continue to traverse the list
      else if (val < currentNode.val) {
        if (currentNode.left !== null) currentNode = currentNode.left;
        else return false; // Not possible to find val
      } else {
        if (currentNode.right !== null) currentNode = currentNode.right;
        else return false; // Not possible to find val
      }
    }
  }

  // BFS - breath first search, DFS - depth first search

  BFS() {
    var visitedNodes = [];
    var queue = []; // Temporarly stores nodes for processing  USE A QUEUE CLASS, ARRAY INCREASES TIME COMPLEXITY
    var currentNode = this.root;
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      visitedNodes.push(currentNode.val);
      // If currentNode has children, add them to the queue
      if (currentNode.left != null) queue.push(currentNode.left);
      if (currentNode.right != null) queue.push(currentNode.right);
    }
    return visitedNodes;
  }

  preOrderDFS() {}

  postOrderDFS() {}

  inOrderDFS() {}
}

// Test Script
let t = new BinarySearchTree();

for (let i = 0; i < 3; i++) {
  t.insert(i);
  t.insert(-i);
  t.insert(5 - i / 2);
  t.insert(5 + i / 2);
}

console.log(t.BFS());

// Export for use in other modules
export default BinarySearchTree;
