// This program implements an ascending bubble sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function bubbleSort(arr) {
  sortingArray = arr; // Avoid mutating the original array

  for (let i = sortingArray.length; i > 0; i--) {
    swaps = 0;

    for (let j = 0; j < i; j++) {
      if (sortingArray[j] > sortingArray[j + 1]) {
        temp = sortingArray[j];
        sortingArray[j] = sortingArray[j + 1];
        sortingArray[j + 1] = temp;
        swaps++;
      }
    }

    if (swaps == 0) {
      return sortingArray;
    }
  }
  return sortingArray;
}

// Decending bubble sort requres modification of > to < on line 11,
// A descending argument was not implemented for simplicity
