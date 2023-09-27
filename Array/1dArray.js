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
// console.log(res, 'res')

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
  for (let i = 0; i < sampleArr.length - 1; i++) {
    if (sampleArr[i] < sampleArr[i + 1]) break
    isSorted = false
  }
  return isSorted
}

// Complexity Analysis

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log(isArraySortedWithLessTimeComplexity(), 'isArraySorted')

// ***********************************************************************

// Find Second Smallest and Second Largest Element in an array
// PROBLEM: Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.
const demoArray = [23, 45, 2, 11, 400, 77, 10]
const findTheSmallestAndLargestElement = () => {
  let max = demoArray[0]
  let min = demoArray[0]
  for (let i = 0; i < demoArray.length; i++) {
    if (max < demoArray[i]) {
      max = demoArray[i]
    }
    if (min > demoArray[i]) {
      min = demoArray[i]
    }
  }
  return { max, min }
}

const findTheSecondLargestAndSecondSmallestElement = () => {
  const { max, min } = findTheSmallestAndLargestElement()
  let secondLargest = arr[0]
  let secondSmallest = arr[0]
  for (let i = 0; i < demoArray.length; i++) {
    if (demoArray[i] > secondLargest && demoArray[i] !== max) {
      secondLargest = demoArray[i]
    }
    if (demoArray[i] < secondSmallest && demoArray[i] !== min) {
      secondSmallest = demoArray[i]
    }
  }
  return secondLargest
}

// Finding second largest by calculating the difference.
// Not using currently
const findTheSecondLargestElement = () => {
  const { max } = findTheSmallestAndLargestElement()
  let diffForMax = max - demoArray[0]
  let secondLargestElement = max
  for (let i = 0; i < demoArray.length; i++) {
    let currentDiffForMax = 0
    if (demoArray[i] < max) {
      currentDiffForMax = max - demoArray[i]
    }
    if (currentDiffForMax <= diffForMax && demoArray[i] !== max) {
      diffForMax = currentDiffForMax
      secondLargestElement = demoArray[i]
    }
  }
  console.log(secondLargestElement, 'largestElement')
}

// Finding second smallest by calculating the difference.
// Not using currently
const findTheSecondSmallestElement = () => {
  let currentDiffForMin = 0
  let diffForMin = min - demoArray[0]
  let secondSmallestElement = min
  if (currentDiffForMin >= diffForMin && demoArray[i] !== min) {
    diffForMin = currentDiffForMin
    secondSmallestElement = demoArray[i]
  }
}
console.log(findTheSecondLargestAndSecondSmallestElement(), 'array ')
