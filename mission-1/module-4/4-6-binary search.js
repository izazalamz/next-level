const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return [arr[mid], mid];
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
