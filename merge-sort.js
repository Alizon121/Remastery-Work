// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

    // Check if the input is length 1 or less
      // If so, it's already sorted: return
  
  if (arr.length < 2) return arr
  let left = []
  let right = []
    // Divide the array in half
  
    for (let i = 0; i < arr.length; i++) {
      if (i < Math.floor(arr.length/2)) {
        left.push(arr[i])
      }
      else right.push(arr[i])
    }
    // Recursively sort the left half
    // Recursively sort the right half
    // Merge the halves together and return
    let leftSort= mergeSort(left) 
    let rightSort = mergeSort(right)
  
    return merge(leftSort, rightSort)
  }
  
  
  // Takes in two sorted arrays and returns them merged into one
  function merge(arrA, arrB) {
  
    // Create an empty return array
    let result = []
    // Point to the first value of each array
    let pointer1 = 0
    let pointer2 = 0
  
    // While there are still values in each array...
    while (pointer1 < arrA.length && pointer2 < arrB.length) {
      // Compare the first values of each array
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array
      if (arrA[pointer1] >= arrB[pointer2]) {
        result.push(arrB[pointer2]);
        pointer2++;
      }
      else {
        result.push(arrA[pointer1]);
        pointer1++;
      }
    }
  
      // If there are remaining elements in arrA, add them to result
      while (pointer1 < arrA.length) {
        result.push(arrA[pointer1]);
        pointer1++;
      }
    
      // If there are remaining elements in arrB, add them to result
      while (pointer2 < arrB.length) {
        result.push(arrB[pointer2]);
        pointer2++;
      }
    // Return the return array
  return result
  }