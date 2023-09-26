// Find the Largest element in an array
// PROBLEM:  Given an array, we have to find the largest element in the array.

const arr = [111, 22, 3, 4, 5, 24]

const findLargestNumber = () => {
  let largest = 0
  for (let i = 0; i < arr.length; i++) {
    if (largest > arr[i]) continue
    largest = arr[i]
  }
  return largest
}

const res = findLargestNumber()
console.log(res, 'res')

// Complexity Analysis

// Time Complexity: O(N)
// Space Complexity: O(1)
