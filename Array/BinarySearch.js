const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const k = 9
let low = 0,
  high = arr.length - 1

// first case if mid === k then return mid.
// if k < mid then assign high=mid-1
// if k > mid then assign low=mid+1
// terminate condition will be when low will be greater than high
// const binarySearch = () => {
//   while (low < high) {
//     let mid = (high + low) / 2
//     if (k === arr[mid]) {
//       console.log('************')
//       return
//     } else if (k < arr[mid]) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   console.log('not found')
// }

// binarySearch()

const binarySearch = (low, high) => {
  let mid = Math.floor((high + low) / 2)
  if (low <= high) {
    if (k === arr[mid]) {
      return 1
    } else if (k < arr[mid]) {
      return binarySearch(low, mid - 1)
    } else {
      return binarySearch(mid + 1, high)
    }
  }
  return -1
}

const res = binarySearch(0, arr.length - 1)
console.log(res, 'res')
