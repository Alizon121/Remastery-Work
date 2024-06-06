function bubbleSort(arr) {
    // Iterate through the array
let swapped;
    for (let i = 0; i< arr.length; i++)  {
      swapped = false
      // If the current value is greater than its neighbor to the right
        // Swap those values

        for (let j = 0; j < arr.length - i - 1; j++) {
      if ( arr[j] > arr[j+1]) {
      [arr[j], arr[j+1]]  = [arr[j+1], arr[j]]
      // Do not move this console.log
      console.log(arr.join(","));
      swapped = true
      }

      }
      // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) break
      // Otherwise, repeat from the beginning
    }
}
