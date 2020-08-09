// This program implements a hash table
// This is part of my solutions to Colt Steel's Algorithms and Data Structures course

// Implementation of a hash table
class HashTable {
  constructor(size = 137) {
    this.keyMap = new Array(size); // Prime values of size are prefered (less collisions)
  }

  // Private hash method
  _hash(key) {
    var total = 0;
    var prime = 83; // Using primes mean less colisions ???
    // Hashing algorithm
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      var char = key[i].toLowerCase();
      var value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    var index = this._hash(key);
    // If there is no collision, this.keyMap[index] will be undefined
    if (this.keyMap[index] == undefined) {
      this.keyMap[index] = []; // Initilise empty array, so .push() can be used
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    var index = this._hash(key);
    if (this.keyMap[index] != undefined) {
      // Check all entries of keyMap[index]
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // For matching input key and stored key
        if (this.keyMap[index][i][0] == key) {
          return this.keyMap[index][i]; // Key found
        }
      }
    }
    return undefined; // Key not found
  }

  keys() {
    var keys = [];
    // For all entries in keymap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] != undefined) {
        // For all sub arrays (possbly containg more than one key-value pair)
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    var values = [];
    // For all non undefined entries in keymap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] != undefined) {
        // For all sub arrays (possbly containg more than one key-value pair)
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // If value is not allready in values
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]); // Add uniqe value to values
          }
        }
      }
    }
    return values;
  }
}

// Test Script
let ht = new HashTable(5);

//  // More sets than size of keyMap => at least 1 collision
//  ht.set("Red", "#FF0000");
//  ht.set("Aqua", "#00FFFF");
//  ht.set("Blue", "#0000FF");
//  ht.set("White", "#FFFFFF");
//  ht.set("Black", "#000000");
//  ht.set("Green", "#00FF00");
//
//  console.log(ht.get("Blue"));
//  console.log(ht.keyMap);
//
//  console.log(ht.keys());
//  console.log(ht.values());

// Export for use in other modules
export default HashTable;
