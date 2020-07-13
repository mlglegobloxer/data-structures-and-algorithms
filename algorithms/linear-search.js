// This program implements a linear search
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

function linearSerach(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			return i;
		}
	}
	return -1;
}
