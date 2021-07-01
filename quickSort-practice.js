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

const input = [
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  62,
  123,
  43,
  2,
  55,
  1,
  234,
  92
];

const quickSort = (array) => {
  // base case, when the recursive call stops
  // when the array contains 1 element, it will stop the recusion and return the array
  if (array.length <= 1) {
    return array;
  }
  // declare pivot (last element)
  const pivot = array[array.length - 1];
  let left = [];
  let right = [];
  // loop through the array except the last element which is being used as the pivot
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      // >= pivot
      right.push(array[i]);
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
  if (left.length && right.length) {
    // recursive call of quickSort on the left and right arrays
    // uses spread operator to insert values into an array
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
};

// CLEANEAR SOLUTION

const quickSort2 = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (const el of array.slice(0, array.length - 1)) {
    if (el < pivot) {
      left.push(el);
    } else {
      // >= pivot
      right.push(el);
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
};

// pure function, doesn't mutate the actual input, only the result of the function
// e.g., if you console.log the input, it will print as the original unsorted array

// quickSort solution using Lomuto's partition
// cache efficient
// sorts in place
// doesn't make new arrays
const quickSort3 = (array, start = 0, end = array.length-1) => {
  if (start >= end) {
    return array;
  }
  // the middle/partition point where we split the array
  // into a left and right side
  const pointer = partition(array, start, end);
  // use recursion to continue partitioning/swapping/sorting values
  // sort the left side
  array = quickSort3(array, start, pointer-1);
  // sort the right side (left side now sorted)
  // result will be completed sorted array
  array = quickSort3(array, pointer+1, end);
  return array;
};

// pivot = item we want to find a position for
// pointer i and j start at the beginning(index[0])
// j => remember the last position that an element was placed in that was less than the pivot
// i => scan left to right to see if they are greater than or less than the pivot
// swap i and j if j<pivot (items to the left are less than pivot, items on right are greater than pivot)
// once j finds no more items < pivot, pivot switches with i
// i would be an element greater than the pivot
// gives us the pivot's final position
// worst case (pivot is the greatest or least item O(n^2) since it's not splitting evenly)
// best case (pivot is the median of partition space)

// declares a pivot (last element)
// uses 2 pointers to keep track of elements in the array
// comparing them to each other and swapping if i < pivot
// this moves all of the elements < pivot to the leftside
// within the quickSort function, it is recursively called
// so it keeps calling this function on the left and right side of the pivot's new
const partition = (array, start, end) => {
  const pivot = array[end]
  let j = start
  for (let i= start; i< end; i++) {
    if (array[i] <= pivot){
      swap(array, i, j)
      j++
    }
  }
  // after looping through every number before the pivot/lest element
  // it will then swap the pivot with a num > pivot
  // so now all elements left of are left side < pivot < right side
  swap(array, end, j) 
  return j
}

// swaps values at array[i] and array[j]
// which would ultimately be i = a num < pivot
const swap = (array, i, j)=> {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = quickSort3;
