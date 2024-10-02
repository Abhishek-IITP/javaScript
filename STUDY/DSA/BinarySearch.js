function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Target not found
  }
  
  const array = [1, 3, 5, 7, 9, 11];
  const target = 7;
  console.log(binarySearch(array, target)); // Output: 3 (Index of 7)
  