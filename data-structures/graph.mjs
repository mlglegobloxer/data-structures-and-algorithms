// This program implements a graph
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a graph using an adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2); // Assumes edge goes both ways
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    var nextTo = this.adjacencyList[vertex];

    for (let i = 0; i < Object.keys(nextTo).length; i++) {
      this.removeEdge(vertex, nextTo[i]);
    }

    delete this.adjacencyList[vertex];
  }
}

// Test Script, Creates the graph
//
//    A--D--E--F
//    |    /
//    B--C
//

let g = new Graph();

g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdge("a", "b");
g.addEdge("a", "d");
g.addEdge("b", "c");
g.addEdge("c", "e");
g.addEdge("d", "e");
g.addEdge("e", "f");

console.log(g);
