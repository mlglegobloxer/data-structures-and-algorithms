// This program implements a max binary heap
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a max binary heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    // Find the correct position for the value
    var index = this.values.length - 1;
    var parentIndex = Math.floor((index - 1) / 2);
    // While not in correct position
    while (this.values[parentIndex] < this.values[index]) {
      // Swap
      var temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      // Re-assign the indecies
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Not Implemented
  extractMax() {
    // Save the max to return
    var maxValue = this.values.shift();
    // Transform back into a heap
    this.values.unshift(this.values.pop()); // Make the last value the root

    var maxIndex = this.values.length - 1;
    var parentIndex = 0;

    // Incomplete
    var rightChildIndex = 2;
    var leftChildIndex = 2;

    return maxValue;
  }
}

// Test Script
let heap = new MaxBinaryHeap();

for (let i = 100; i > 1; i = i / 2) {
  heap.insert(100 + i);
}
console.log(heap.values);

// Export for use in other modules
export default MaxBinaryHeap;
