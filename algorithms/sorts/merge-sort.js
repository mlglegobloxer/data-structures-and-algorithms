// This program implements an ascending merge sort
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function merge(arr1, arr2) {
  var returnArray = [];
  var i = (j = 0);
  // Merge logic
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) returnArray.push(arr1[i]), i++;
    else returnArray.push(arr2[j]), j++;
  }
  // Add the remainder of the array with largest numbers at end
  returnArray.push(...arr1.slice(i));
  returnArray.push(...arr2.slice(j));
  return returnArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    var midIndex = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, midIndex));
    var right = mergeSort(arr.slice(midIndex));
    return merge(left, right);
  }
}

// O(nlog(n)) - dependable
