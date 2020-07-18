// This program implements an ascending insertion sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function insertionSort(sortingArray) {
  arr = sortingArray; // Avoid mutating the original array

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

// O(n^2) - very good for almost sorted inputs
