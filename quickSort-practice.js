/* QUICKSORT
- choose a pivot (i.e., can be random, middle, or last element, depends on preference)
- compare each element in the input array to the pivot
- place smaller numbers into the left array
- place larger numbers into the right array
- recursively call quickSort on the right/left arrys
- until each element has been compared/sorted
- in the backwards phase of recursion
- the elements will then be merged back into sorted arrays
- best/avg case: O(log(n)) since the input is being halved with each operation
- worst case: O(n^2) e.g., if you have a sorted array and the last element/greatest number
is chosen as the pivot
- more commonly used that mergeSort since it is cache/space efficient
- sorting occurs in place where as in mergeSort, new arrays are created
*/

const input = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 62, 123, 43, 2, 55, 1, 234, 92]

const quickSort = (array) => {
  // base case, when the recursive call stops
  // when the array contains 1 element, it will stop the recusion and return the array
  if (array.length <= 1) {
    return array
  }
  // declare pivot (last element)
  const pivot = array[array.length - 1]
  let left = []
  let right = []
  // loop through the array except the last element which is being used as the pivot
  for (let i=0; i<array.length - 1; i++){
    if (array[i] < pivot) {
      left.push(array[i])
    } else { // >= pivot
      right.push(array[i])
    }
  }

  // OTHER SOLUTIONS FOR THIS FOR LOOP

  //// const of for loop
  //// for every element of the array (not including last element)
  // for (const el of array.slice(0,array.length-1)) {
  //   if (el < pivot) {
  //     left.push(el)
  //   } else { // >= pivot
  //     right.push(el)
  //   }
  // }

  //// ternary
  // for (const el of array.slice(0,array.length-1)) {
  //   el < pivot ? left.push(el) : right.push(el)
  // }

  // if there are elements remaining in the left or right array
  if(left.length && right.length) {
    // recursive call of quickSort on the left and right arrays
    // uses spread operator to insert values into an array
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
}

// CLEANEAR SOLUTION

const quickSort2 = (array) => {
  if (array.length <= 1) {
    return array
  }
  const pivot = array[array.length - 1]
  let left = []
  let right = []

  for (const el of array.slice(0,array.length-1)) {
    if (el < pivot) {
      left.push(el)
    } else { // >= pivot
      right.push(el)
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)]
}


// pure function, doesn't mutate the actual input, only the result of the function
// e.g., if you console.log the input, it will print as the original unsorted array

module.exports = quickSort2