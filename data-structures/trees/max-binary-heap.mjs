// This program implements a max binary heap
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a max binary heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Private swap method for swapping nodes
  _swap(index1, index2) {
    var temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  insert(val) {
    this.values.push(val);
    // Find the correct position for the value
    var index = this.values.length - 1;
    var parentIndex = Math.floor((index - 1) / 2);
    // While not in correct position
    while (this.values[parentIndex] < this.values[index]) {
      // Swap
      this._swap(parentIndex, index);
      // Re-assign the indecies
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Not Implemented
  extractMax() {
    // Save the max to return, replace with last element
    var maxValue = this.values[0];
    this.values[0] = this.values.pop();

    // Transform back into a max binary heap
    var maxIndex = this.values.length - 1;
    var sinkIndex = 0;
    var leftIndex, rightIndex;

    // Loop, swapping sink node with larger of its children
    while (true) {
      // If not out of bounds, assign the indecies of current node's parents
      if (2 * sinkIndex + 2 <= maxIndex) {
        leftIndex = 2 * sinkIndex + 1;
        rightIndex = 2 * sinkIndex + 2;
      } else if (2 * sinkIndex + 1 == maxIndex) {
        leftIndex = 2 * sinkIndex + 1;
        rightIndex = 0; // Largest node => allways greater (for later logic)
      } else {
        leftIndex = rightIndex = 0; // Largest node => allways greater (for later logic)
      }
      console.log(heap.values);
      // Swap with largest of children (if larger than sink)
      if (
        this.values[leftIndex] > this.values[sinkIndex] &&
        this.values[leftIndex] > this.values[rightIndex]
      ) {
        this._swap(sinkIndex, leftIndex);
        sinkIndex = leftIndex;
        //
      } else if (
        this.values[rightIndex] > this.values[sinkIndex] &&
        this.values[rightIndex] > this.values[leftIndex]
      ) {
        this._swap(sinkIndex, rightIndex);
        sinkIndex = rightIndex;
        //
      } else break; // Sinknode larger than both its children, heap is restored
    }

    return maxValue;
  }
}

// Test Script
let heap = new MaxBinaryHeap();

for (let i = 100; i > 1; i = i / 2) {
  heap.insert(100 + i);
}
// Creates the heap
//                  200
//        150                  125
//  112.5    106.25    103.1.25   101.5625
//

console.log(heap.values);

let a = heap.extractMax();
console.log(a);

heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
// Export for use in other modules
export default MaxBinaryHeap;
