// This program implements an ascending quick sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function swapElements(arr, index1, index2) {
  // Mutates the input array to swap 2 elements
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  // Chose the pivor to be the first value
  var pivot = arr[startIndex];
  var pivotIndex = startIndex;
  // All elements < pivot to the left, others to right, keep track of where to finally put pivot
  for (i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) pivotIndex++, swapElements(arr, pivotIndex, i);
  }
  // Put the pivot in place
  swapElements(arr, pivotIndex, startIndex);
  return pivotIndex;
}

// Warning, the original array will be mutated (neccicary to implement recusively)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// avg case O(nlog(n)), worst case O(n^2)
