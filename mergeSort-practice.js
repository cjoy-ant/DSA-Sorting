const mergeSort = (array) => {
  // check if array can be split
  if (array.length <= 1){
    return array
  }
  // find middle index, Math.floor rounds down
  const middle = Math.floor(array.length/2)

  // split array into 2 halves
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  // use recursion to continue splitting
  // until you reach the base case (array.length <= 1; at single elements)
  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

// this solution for merge() uses .shift() to remove/return the first index of an array
const merge = (left, right) => {
  // create new array that will hold sorted result
  let result = []
  // check if left and right array is empty
  while(left.length && right.length){
    // find lower value
    if (left[0] <= right[0]){
      // .shift() removes index 0 from left array and returns the value
      // adds value to result array
      result.push(left.shift())
    } else { // otherwise, right left > right
      // .shift() removes index 0 from right array and returns the value
      // adds value to result array
      result.push(right.shift())
    }
  }
  // in event that the lists are not the same length, the while loop will terminate
  // the code will continue to execute on the list that still has elements that have not been
  // sorted and merged into the result array
  // same logic as above, but only executes on the array that still has elements that need to be sorted

  // sorts/merges left array if it has elements remaining (left.length > right.length)
  while (left.length) {
    result.push(left.shift())
  }
  // sorts/merges right array if it has elements remaining (left.length < right.length)
  while (right.length) {
    result.push(right.shift())
  }
  // returns the result, which is a sorted and merged array
  return result
}

// this solution uses variables i and j to loop through each index of the array
const merge2 = (left, right) => {
  let result = [] // will store output of sorted/merged array
  let i = 0 // leftIndex
  let j = 0 // right Index

  // while there are elements in both arrays that need to be sorted/merged
  // code will continue to execute on both arrays
  while (i<left.length && i < right.length){
    // if left value <= right value
    if (left[i] <= right[j]){
      // add the left value to the result array
      result.push(left[i])
      // increment ito move to the next index of the left array
      i+=1
    } else { // otherwise, if left > right
      // add right value to the result array
      result.push(right[j])
      j+=1
    }
  }

  // in event that the lists are not the same length, the while loop will terminate
  // the code will continue to execute on the list that still has elements that have not been
  // sorted and merged into the result array
  // same logic as above, but only executes on the array that still has elements that need to be sorted
  while (i<left.length){
    result.push(left[i])
    i+=1
  }
  while(j<right.length){
    result.push(right[j])
    j+=1
  }
  // returns the final, sorted and merged array!
  return result
}
