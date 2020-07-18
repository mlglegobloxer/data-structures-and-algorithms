// This program implements an ascending bubble sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function bubbleSort(sortingArray) {
  arr = sortingArray; // Avoid mutating the original array

  for (let i = arr.length; i > 0; i--) {
    swaps = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaps++;
      }
    }

    if (swaps == 0) {
      return arr;
    }
  }
  return arr;
}

// O(n^2)
