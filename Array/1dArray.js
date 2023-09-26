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

// ********************************************************************************************

// Check if an Array is Sorted
// PROBLEM: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing
// / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

const sampleArr = [1, 2, 3, 4, 5]

// Approach: Brute Force
const isArraySorted = () => {
  let isSorted = true
  for (let i = 0; i < sampleArr.length; i++) {
    for (let j = i + 1; j < sampleArr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        isSorted = false
      }
    }
  }
  return isSorted
}

// Complexity Analysis

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// Approach: Efficient (Single traversal)
const isArraySortedWithLessTimeComplexity = () => {
  let isSorted = true
  let j = 1
  for (let i = 0; i < sampleArr.length - 1; i++) {
    if (sampleArr[i] < sampleArr[j]) break
    isSorted = false
    j++
  }
  return isSorted
}

// Complexity Analysis

// Time Complexity: O(N)
// Space Complexity: O(1)

// console.log(isArraySorted(), 'isArraySorted')
