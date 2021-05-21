/* BUBBLE SORT

classic "terrible" sorting algorithm
loop through an array to find out whether adjacent values need swapping
until there are no more values that need swapping */

// swaps the values at 2 indexes in an array
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// looks through adjacent pairs of values in the array
// if values are in the wrong order, it swaps them around
// and increases the swaps counter
// time complexity: polynomial O(n^2)
function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swaps++;
      }
  }

  if (swaps > 0) {
      return bubbleSort(array);
  }
  return array;
};

/* MERGE SORT 
  
takes a divide and conquer approach
it continually breaks down the array into smaller chunks
then merges them back together in the correct order */

// if the array has 1 or 0 elements = sorted; return the array
// otherwise, slice the array into 2 halves and sort each half
// by recursively calling mergeSort
// the 2 sorted halves are then merged together in the correct order using merge()
function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

// keeps choosing the lowest value from the left or right arrays
// that haven't already been added to the output array
// when 1 of the arrays is empty, it adds the remaining values from the other array

// best, average, and worst case: logarithmic O(log(n))
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

/* QUICKSORT

best and average case: logarithmicc O(log(n))
worst case: polynomial O(n^2)

-more commonly used than merge sort
-cache-efficient
-easily performced in place (i.e., without additional memory allocations)
-uses a divide and conquer approach

partition the array into 2 halves around a pivot value
all of the values that are less than the pivot value go to 1 half
the values that are greater go to the other half of the array
then recurisvely sort the 2 halves of the array 
until the halves are of length 0 or 1 */
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

/* PARTITION 

Lomuto's algorithm
-the pivot is the final value in the array
-loop through the arary
-swap values as you go to put them on either side of the pivot point
-put the pivot into the correct place in the array */
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

module.exports = {swap, bubbleSort, mergeSort, merge, quickSort, partition}