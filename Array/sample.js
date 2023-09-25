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
console.log(arr)
// **********
