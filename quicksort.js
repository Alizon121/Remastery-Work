function quicksort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length < 2) return arr
  
    // Pick the first value as the pivot
  let pivot = arr[0]
  let left = []
  let right = []
    // Orient the pivot so that...
        // every number smaller than the pivot is to the left
        for (let i = 1; i < arr.length; i++) {
          // every number larger (or equal) than the pivot is to the right
          if (arr[i] < pivot) left.push(arr[i])
          else right.push(arr[i])
        }
  
    // Recursively sort the left
    // Recursively sort the right
    // Return the left, pivot and right in sorted order
  
  
  return [...quicksort(left), pivot, ...quicksort(right)] // The recursive calls will parition elements form the right sub-array into the left sub-array
                                                          // until there is only one or less elements in the sub-arrays. This requires the pivot to change.
  
  }