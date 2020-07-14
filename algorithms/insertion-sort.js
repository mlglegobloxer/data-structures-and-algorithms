// This program implements an ascending insertion sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function insertionSort(arr) {
  sortingArray = arr; // Avoid mutating the original array

  for (let i = 1; i < sortingArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (sortingArray[j - 1] > sortingArray[j]) {
        temp = sortingArray[j];
        sortingArray[j] = sortingArray[j - 1];
        sortingArray[j - 1] = temp;
      }
    }
  }

  return sortingArray;
}
