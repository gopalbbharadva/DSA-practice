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
// console.log(findLargestAndSmallestOptimal())
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
// console.log(linearSearch(4), 'linear search')
// Complexity Analysis

// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1)

// ************************************************************************

// Left Rotate the Array by One
// PROBLEM : Given an array of N integers, left rotate the array by one place.

// $$$$$$$$$$$$   APPROACH: OPTIMAL
let arrAfterRotate = [1, 2, 3, 4, 5]
const rotateArrayByOneIndex = () => {
  for (let i = 0; i < arrAfterRotate.length; i++) {
    if (i !== arrAfterRotate.length - 1) {
      let temp = arrAfterRotate[i]
      arrAfterRotate[i] = arrAfterRotate[i + 1]
      arrAfterRotate[i + 1] = temp
    }
  }
  return arrAfterRotate
}

// Complexity Analysis

// Time Complexity: O(n), as we iterate through the array only once.
// Space Complexity: O(1) as no extra space is used

// console.log('sample')
// console.log(rotateArrayByOneIndex(), 'by index')

// ****************************************************************************

// Count Maximum Consecutive One’s in the array
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum
// consecutive ones in the array.

const arrayWithZerosAndOne = [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1]
const findTotalConsecutiveOnesLength = () => {
  let maxCount = 0
  let temp = 0
  for (let i = 0; i < arrayWithZerosAndOne.length; i++) {
    if (arrayWithZerosAndOne[i] === 1) {
      temp++
    } else {
      temp = 0
    }
    if (maxCount < temp) {
      maxCount = temp
    }
  }
  return maxCount
}

findTotalConsecutiveOnesLength()

// ****************************************************************************

// Move all Zeros to the end of the array
// In this article we will learn how to solve the most asked coding interview problem:
// “Move all Zeros to the end of the array”
// Problem : You are given an array of integers, your task is to move all the zeros in the array to the end of
// the array and move non-negative integers to the front by maintaining their order.

const numbersWithZeros = [1, 22]

const moveZerosToTheEnd = () => {
  let j = 0
  let isZero = false
  for (let k = 0; k < numbersWithZeros.length; k++) {
    if (numbersWithZeros[k] === 0) {
      isZero = true
      j = k
      break
    }
  }
  if (isZero) {
    for (let i = j + 1; i < numbersWithZeros.length; i++) {
      if (numbersWithZeros[i] !== 0) {
        numbersWithZeros[j] = numbersWithZeros[i]
        numbersWithZeros[i] = 0
        j = j + 1
      }
    }
  }
  return numbersWithZeros
}

// console.log(moveZerosToTheEnd())

// ************************************************************

// Rotate array by K elements
// Problem : Given an array of integers, rotating array of elements by k elements either left or right.

// const rotationArr = [1, 2, 3, 4, 5, 6, 7]
const rotationArr = [1, 2, 3, 4, 5]

const rotateArrayByOnePositionToRight = (k = 3) => {
  let temp = []
  if (rotationArr.length !== 1) {
    for (let i = rotationArr.length - k; i < rotationArr.length; i++) {
      temp.push(rotationArr[i])
    }
    console.log(temp, 'temp')
    console.log(rotationArr, 'rarr')
    for (let i = rotationArr.length - k - 1; i >= 0; i--) {
      rotationArr[i + k] = rotationArr[i]
    }
    console.log(rotationArr, 'arr')
    for (let i = 0; i < k; i++) {
      rotationArr[i] = temp[i]
    }
  }
  console.log(rotationArr, 'arr')
}

// rotateArrayByOnePositionToRight()

const rotateArrayByKPositionToLeft = (k) => {
  let temp = []
  if (rotationArr.length <= 1) {
    return rotationArr
  }
  k = k % rotationArr.length
  if (k > rotationArr.length) return rotationArr
  // make an arr of first k elements to the
  for (let i = 0; i < k; i++) {
    temp.push(rotationArr[i])
  }
  // shift n-k elements to the left
  for (let i = k; i <= rotationArr.length - 1; i++) {
    rotationArr[i - k] = rotationArr[i]
  }
  // add temp array to last last k elements of rotationArr
  for (let i = 0; i < temp.length; i++) {
    rotationArr[rotationArr.length - k + i] = temp[i]
  }
  console.log(rotationArr, 'arr')
}

// rotateArrayByKPositionToLeft(9)

// *************************************************************

// Remove Duplicates in-place from Sorted Array
// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates
// in place such that each unique element appears only once. The relative order of the elements should be kept the same.

// const duplicateItemsArr = [1, 1, 2, 2, 2, 3, 3,4,4]

// const getDistinctArray = () => {
//   let i = 0
//   for (let j = 0; j < duplicateItemsArr.length; j++) {
//     if (duplicateItemsArr[i] != duplicateItemsArr[j]) {
//       i++
//       duplicateItemsArr[i] = duplicateItemsArr[j]
//     }
//   }
//   console.log(duplicateItemsArr, 'arr')
// }

// getDistinctArray()

// ******************************************************************

// Find the missing number in an array
// Problem Statement: Given an integer N and an
// array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

// Brute force approach
// const incompleteArr = [1, 0, 4]
// const makeCompleteArr = () => {
//   for (let i = 0; i <= incompleteArr.length; i++) {
//     let flag = 0
//     for (let j = 0; j < incompleteArr.length; j++) {
//       if (incompleteArr[j] === i) {
//         flag = 1
//         break
//       }
//     }
//     if (flag === 0) {
//       return i
//     }
//   }
// }

// const res2 = makeCompleteArr()
// console.log(res2, 'res')

// Better approach using HASHING

// const dummyArr = [2, 1]
// const findMissingNumber = () => {
//   const temp = new Array(dummyArr.length + 1).fill(0)
//   console.log(temp, 'temp')
//   for (let i = 0; i < dummyArr.length; i++) {
//     temp[dummyArr[i]]++
//   }
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === 0) return i
//   }
// }
// const result = findMissingNumber()
// console.log(result, 'result')

// Optimal Approach

// const prevArr = [3, 0, 1, 2]

// const sumTillN = (n) => {
//   if (n === 0) return 0
//   else return n + sumTillN(n - 1)
// }

// const findMissingNumber = () => {
//   const absoluteSum = sumTillN(prevArr.length)
//   const wrongSum = sumTillN(Math.max(...prevArr))
//   const n = 4
//   return absoluteSum - wrongSum
// }

// const result = findMissingNumber()

// ********************************************************************

// Find the number that appears once, and the other numbers twice
// Problem Statement: Given a non-empty array of integers arr,
// every element appears twice except for one. Find that single one.

// Brute Force approach
// const prevArr = [1, 3, -1, , 1, -2, -2, 1, 4, 2, 3]
// const findSingeOccurrenceNumber = () => {
//   for (let i = 0; i < prevArr.length; i++) {
//     let count = 0
//     for (let j = 0; j < prevArr.length; j++) {
//       if (prevArr[i] === prevArr[j]) {
//         count++
//       }
//     }
//     if (count === 1) {
//       return prevArr[i]
//     }
//   }
// }
// const result = findSingeOccurrenceNumber()
// console.log(result, 'result')

// Hashing Approach

// const prevArr = [1, 3, -1, , 1, -2, -2, 1, 4, 2, 3]
// const prevArr = [1, 2, 3, 3, 2]

// const arrayRange = (start, stop, step) =>
//   Array.from(
//     { length: (stop - start) / step + 1 },
//     (value, index) => start + index * step
//   )

// const findMaxNumber = (arr) => {
//   let max = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i]
//     }
//   }
//   return max
// }

// const findMinNumber = (arr) => {
//   let min = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//   }
//   return min
// }
// findMinNumber([1, 2, 3, 4, 5])

// const findSingleOccurrenceNumber = () => {
//   const maxNumber = findMaxNumber(prevArr)
//   const minNumber = findMinNumber(prevArr)
//   const temp = arrayRange(minNumber, maxNumber, 1)
//   console.log(temp, 'temp')
//   for (let i = 0; i <= temp.length; i++) {
//     console.log(prevArr[i], 'i')
//     temp[prevArr[i]]++
//   }
//   console.log(temp, 'prevArr')
// }

// findSingleOccurrenceNumber()

// ****************************************************

// Union of Two Sorted Arrays
// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
// The union of two arrays can be defined as the common and distinct elements in the two arrays.
// NOTE: Elements in the union should be in ascending order.

// const firstArr = [1, 2, 3, 4, 5, 5]
// const secondArr = [1, 2, 3, 4, 5, 6]

// const removeDuplicates = (arr) => {
//   const result = arr.reduce(
//     (acc, cur) => (acc.find((num) => num === cur) ? acc : [...acc, cur]),
//     []
//   )
//   return result
// }
// console.log(removeDuplicates(firstArr), 'first')
// console.log(removeDuplicates(secondArr), 'second')

// console.log('')
// const arr1 = [1, 2, 3, 4, 5, 5, 6]
// const set = new Set(arr1)
// console.log([...set], 'spread set')
// console.log(set, 'set')
// for (let i of set) {
//   console.log(i, 'i')
// }
// for (let i = 0; i < arr1.length; i++) {
//   map.set()
//   // map
// }
// const sampleArr1 = [1, 2, 3, 4, 5, 5, 6, 6]
// const sampleArr2 = [1, 3, 4, 5, 5, 7, 8]
// const map = new Map()
// let temp = []
// for (let i = 0; i < sampleArr1.length; i++) {
//   map.set(sampleArr1[i], i)
// }

// for (let i = 0; i < sampleArr2.length; i++) {
//   map.set(sampleArr2[i], i)
// }

// for (let [value, num] of map) {
//   temp.push(value)
// }
// console.log(temp, 'sam arr 1')

// const map1 = new Map()
// map1.set(1, '2')
// map1.set(10, '9')
// console.log(map1.get(1), 'map1 get')

// for (let j of sampleArr1) {
//   console.log()
// }
// console.log(map1, 'map1')

// console.log(result, 'result')

// const findTheUnionNumbers = () => {
//   con
//   // con
//   // for()
// }

// ****************************************************

// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers arr[] and an integer target.

// Brute force approach
// const arr1 = [-1, -1]
// const target = -2

// const twoSum = () => {
//   let flag = false
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//       if (arr1[i] + arr1[j] === target) {
//         flag = true
//         return flag
//       }
//     }
//   }
//   console.log(flag, 'flag')
// }

// const result = twoSum()
// console.log(result, 'result')

// Hashmap approach

const arr1 = [1, 2, 3, 4, 5]
const map1 = new Map()
const target = 4
const twoSum = () => {
  for (let i = 0; i < arr1.length; i++) {
    const otherNum = target - arr1[i]
    if (map1.has(otherNum)) {
      return [map1.get(otherNum), i]
    } else {
      map1.set(arr1[i], i)
    }
  }
}

const result = twoSum()
console.log(result, 'result')
