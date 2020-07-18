// This program implements an ascending insertion sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function selectionSort(sortingArray) {
  arr = sortingArray; // Avoid mutating the original array

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      min = arr[i];
      minIndex = i;

      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }

      temp = arr[i];
      arr[i] = min;
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// O(n^2)
