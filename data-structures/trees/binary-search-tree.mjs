// This program implements a binary search tree
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Import a queue for use in the BFS algorithm
import Queue from "../stacks-queues/queue.mjs";

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
  // BFS is better for sparce trees (space complexity)
  // DFS is better for dense trees  (space complexity)

  BFS() {
    var visitedNodes = [];
    var queue = new Queue(); // Temporarly stores nodes for processing
    var currentNode = this.root;
    queue.enQueue(currentNode);
    // BFS traversal
    while (queue.length > 0) {
      currentNode = queue.deQueue();
      visitedNodes.push(currentNode.val);
      // If currentNode has children, add them to the queue
      if (currentNode.left != null) queue.enQueue(currentNode.left);
      if (currentNode.right != null) queue.enQueue(currentNode.right);
    }
    return visitedNodes;
  }

  preOrderDFS() {
    var visitedNodes = [];
    // Recursive helper function to perform preOrderDFS
    function preOrderDFSHelper(node) {
      visitedNodes.push(node.val);
      if (node.left != null) preOrderDFSHelper(node.left);
      if (node.right != null) preOrderDFSHelper(node.right);
    }
    // Evaluate the function starting at the root and return
    preOrderDFSHelper(this.root);
    return visitedNodes; // Could be used for "exporting" tree
  }

  postOrderDFS() {
    var visitedNodes = [];
    // Recursive helper function to perform postOrderDFS
    function postOrderDFSHelper(node) {
      if (node.left != null) postOrderDFSHelper(node.left);
      if (node.right != null) postOrderDFSHelper(node.right);
      visitedNodes.push(node.val);
    }
    // Evaluate the function starting at the root and return
    postOrderDFSHelper(this.root);
    return visitedNodes;
  }

  inOrderDFS() {
    var visitedNodes = [];
    // Recursive helper function to perform inOrderDFS
    function inOrderDFSHelper(node) {
      if (node.left != null) inOrderDFSHelper(node.left);
      visitedNodes.push(node.val);
      if (node.right != null) inOrderDFSHelper(node.right);
    }
    // Evaluate the function starting at the root and return
    inOrderDFSHelper(this.root);
    return visitedNodes; // Returns all nodes in order
  }
}

// // Test Script
// let t = new BinarySearchTree();
//
// t.insert(10);
// t.insert(6);
// t.insert(3);
// t.insert(8);
// t.insert(15);
// t.insert(20);
//
// // Creates the BST:
// //           10
// //      6         15
// //    3   8         20
//
// console.log(t.inOrderDFS());

// Export for use in other modules
export default BinarySearchTree;
