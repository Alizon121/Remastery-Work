// Out-of-place Selection
function selectionSort(arr) {
    // Copy the original array
    let copyArr = [...arr]
    // Create an array to store the sorted values
    let sorted = [];
    // While the array is not empty...
    // Find the index of the minimum value in the unsorted half
  console.log("")
    while (copyArr.length > 0) {
      let minIndex = 0;
      for (let i =1; i < copyArr.length; i++) {
      if (copyArr[minIndex] > copyArr[i]) {
        minIndex = i;
      }
    }
    // Save and remove the value at the min index
    // Add the min value to the end of the sorted array
    let remove = copyArr.splice(minIndex, 1)[0]
    sorted.push(remove);
    // Do not move this console.log
    console.log(sorted.join(","));
  }
      return sorted
    }


// In-place
  function selectionSortInPlace(arr) {
    // Set a pointer at zero diving the array into sorted and unsorted halves
    let divider = 0;
    // Repeat while the unsorted half is not empty:
  //  Do not move this console.log
   console.log(arr.join(","));
  
    while (divider < arr.length) {
      
      // Find the index of the minimum value in the unsorted half
      let minIndex = divider;
      for (let i = divider + 1; i < arr.length; i++) {
        // minIndex = 0, 1, 2, 3, 4,
        if (arr[minIndex] > arr[i]) {
          // Save the min value
          minIndex = i
        }
        // Shift every unsorted value to the left of the min value to the right by 1
      }
      // Put the min value at the divider
      
      if (arr[minIndex] !== arr[divider]) {
        [arr[divider], arr[minIndex]] = [arr[minIndex], arr[divider]];
      }
  
      //  Do not move this console.log
   console.log(arr.join(","));
  
  
      // Increment the divider and repeat
      divider++;
    }
  
  console.log(arr)
  return arr
  }