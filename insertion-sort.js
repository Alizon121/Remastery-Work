// Out-of-place
function insertionSort(arr) {
    // Copy the original array
    let copyArr = [...arr];
    // Create an array to store the sorted values
    let sorted = [];
  
    // While the array is not empty:
    while (copyArr.length > 0) {
      // Shift a value from the array
      let value = copyArr.shift();
  
      // Find the correct position to insert the value in the sorted array
      let inserted = false;
      for (let i = 0; i < sorted.length; i++) {
        if (value < sorted[i]) {
          sorted.splice(i, 0, value);
          inserted = true;
          break;
        }
      }
      // If the value is greater than all elements in the sorted array, push it to the end
      if (!inserted) {
        sorted.push(value);
      }
    }
    // Return the sorted array
    return sorted;
  }

//   In-place Insertion
function insertionSortInPlace(arr) {

    // Set a pointer dividing the array into sorted and unsorted halves
    // Do not include index at 0 since it is the divider
  for (let i = 1; i < arr.length; i++) {
    let j = i -1 // decrease/shift index at i by 1
  let temp = arr[i]
  console.log(temp)
  
  while (j >= 0 && arr[j] > temp) {
    arr[j+1] = arr[j]; // shift the index to right by 1
    j--;
  }
  arr[j+1] = temp; // assign temp's values to the new index
  }
  return arr
  }