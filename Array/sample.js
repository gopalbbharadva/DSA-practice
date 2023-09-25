// SET MATRIX ZERO
// PROBLEM : Given a matrix if an element in the matrix is 0 then you will have
// to set its entire column and row to 0 and then return the matrix.

// Explanation:
// **********
// m(row)=3, n(column)=3 ,mat[m][n]  for mat[1][1]=0

// colSet
// mat[0][1], mat[2][1] , store only the column index, 1

// rowSet
// mat[1][0], mat[1][2], store only the row index, 0

// rowSet = {1}
// columnSet = {1}
// *********

// Code:
// *********
const arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
const rowSet = new Set()
const columnSet = new Set()

// Here we storing the row index and column index for which we have zero value.
const markZerosUsingSets = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        rowSet.add(i)
        columnSet.add(j)
      }
    }
  }

  // And here we are setting the value 0 in entire row and column.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (rowSet.has(i) || columnSet.has(j)) {
        arr[i][j] = 0
      }
    }
  }
}
markZerosUsingSets()
console.log(arr, 'arr')
// **********

// ***********
// 2nd SOLUTION
// **********
const arr2 = [
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 1, 1],
]

// Adding -1 to particular row where we found 0
const markRow = (totalRows, n) => {
  for (let a = 0; a < totalRows; a++) {
    if (arr2[n][a] !== 0) {
      arr2[n][a] = -1
    }
  }
}

// Adding -1 to particular column where we found 0
const markColumn = (totalColumnCount, m) => {
  for (let b = 0; b < totalColumnCount; b++) {
    if (arr2[b][m] !== 0) {
      arr2[b][m] = -1
    }
  }
}

// Check for 0 in row and column and add -1 for entire row and column except the place where 0.
// Example Before :
// [1 1 1 1]
// [1 0 1 0]
// [1 1 1 1]
const checkForZeroAndAddMinusOne = (totalRowCount, totalColumnCount) => {
  for (let i = 0; i < totalRowCount; i++) {
    for (let j = 0; j < totalColumnCount; j++) {
      if (arr2[i][j] === 0) {
        markRow(totalColumnCount, i)
        markColumn(totalRowCount, j)
      }
    }
  }
  //  After :
  //  [1  -1  1 -1]
  //  [-1  0 -1  0]
  //  [-1 -1 -1 -1]

  // After above step we will have our array
  for (let n = 0; n < totalRowCount; n++) {
    for (let m = 0; m < totalColumnCount; m++) {
      if (arr2[n][m] === -1) {
        arr2[n][m] = 0
      }
    }
  }
  // After adding zero :
  // [1, 0, 1, 0]
  // [0, 0, 0, 0]
  // [1, 0, 1, 0]
}

const rowLength = arr2.length
const columnLength = arr2[0].length

checkForZeroAndAddMinusOne(rowLength, columnLength)
console.log(arr2, 'arr')
// *************
