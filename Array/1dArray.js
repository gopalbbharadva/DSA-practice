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

// $$$$$$$$$$$$    APPROACH: BRUTE FORCE
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

// console.log(isArraySortedWithLessTimeComplexity(), 'isArraySorted')

// ***********************************************************************

// Find Second Smallest and Second Largest Element in an array
// PROBLEM: Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.

// STEPS:
// - First we will find the first smallest and largest elements.
// - Then we will again loop through the array.
// - Here we will use the same logic for finding max and min but this
// time we will check for max and min and skip if found.

// $$$$$$$$$$$$    Approach: BETTER APPROACH
const demoArray = [23, 45, 2, 11, 400, 77, 15]
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
  let secondLargest = demoArray[0]
  let secondSmallest = demoArray[0]
  for (let i = 0; i < demoArray.length; i++) {
    if (demoArray[i] > secondLargest && demoArray[i] !== max) {
      secondLargest = demoArray[i]
    }
    if (demoArray[i] < secondSmallest && demoArray[i] !== min) {
      secondSmallest = demoArray[i]
    }
  }
  return [secondLargest, secondSmallest]
}

// Finding second largest by calculating the difference.
// NOTE: Not using currently
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
// NOTE: Not using currently
const findTheSecondSmallestElement = () => {
  let currentDiffForMin = 0
  let diffForMin = min - demoArray[0]
  let secondSmallestElement = min
  if (currentDiffForMin >= diffForMin && demoArray[i] !== min) {
    diffForMin = currentDiffForMin
    secondSmallestElement = demoArray[i]
  }
}
// console.log(findTheSecondLargestAndSecondSmallestElement(), 'array ')
// Complexity Analysis

// Time Complexity: O(N), We do two linear traversals in our array
// Space Complexity: O(1)

// $$$$$$$$$$$$    APPROACH: OPTIMAL APPROACH
const findLargestAndSmallestOptimal = () => {
  let small = demoArray[0]
  let secondSmall = demoArray[0]
  let large = demoArray[0]
  let secondLarge = demoArray[0]
  for (let i = 0; i < demoArray.length; i++) {
    if (demoArray[i] < small) {
      small = demoArray[i]
    } else if (demoArray[i] < secondSmall) {
      secondSmall = demoArray[i]
    }
    if (demoArray[i] > large) {
      large = demoArray[i]
    } else if (demoArray[i] > secondLarge) {
      secondLarge = demoArray[i]
    }
  }
  return [secondLarge, secondSmall]
}
console.log(findLargestAndSmallestOptimal())
// Complexity Analysis

// Time Complexity: O(N), Single-pass solution
// Space Complexity: O(1)

// ************************************************************************
// Linear Search in C
// PROBLEM : Given an array, and an element num
// the task is to find if num is present in the given array or not.
// If present print the index of the element or print -1.

// $$$$$$$$$$$$   APPROACH: OPTIMAL
const demoArrayForLinearSearch = [1, 2, 3, 4, 5]
const linearSearch = (num) => {
  for (let i = 0; i < demoArrayForLinearSearch.length; i++) {
    if (demoArrayForLinearSearch[i] === num) {
      return i
    }
  }
  return -1
}
console.log(linearSearch(4), 'linear search')
// Complexity Analysis

// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1)

// ************************************************************************
