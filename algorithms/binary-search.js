// This program implements a binary search
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function binarySearch(arr, item) {
	searchArray = arr; // Avoid mutating the original array
	baseAdrress = 0;

	while (searchArray.length >= 1) {
		midIndex = Math.floor(searchArray.length / 2);

		if (searchArray[midIndex] == item) {
			return baseAdrress + midIndex;
		} else if (searchArray[midIndex] > item) {
			searchArray = searchArray.slice(0, midIndex);
		} else {
			baseAdrress += midIndex + 1;
			searchArray = searchArray.slice(midIndex + 1, searchArray.length);
		}
	}
	return -1;
}

// Implemented iteratively to reduce space complexity
