const {
  swap,
  bubbleSort,
  mergeSort,
  merge,
  quickSort,
  partition
} = require("./sorting");

const main = () => {
  // 1. Understanding merge sort
  let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]; // 16

  // What is the resulting list that will be sorted after 3 recursive calls to mergesort?
  // 1) [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
  // 2) [21, 1, 26, 45] [20, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
  // 3) [21, 1] [26, 45] [20, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]

  // What is the resulting list that will be sorted after 16 recursive calls to mergesort?
  // 1) [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
  // 2) [21, 1, 26, 45] [20, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
  // 3) [21, 1] [26, 45] [20, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]
  // 4) [21] [1] [26] [45] [20] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40]
  // 5) [1, 21] [26, 45] [20, 28] [2, 9] [16, 49] [27, 39] [34, 43] [40, 46]
  // 6) [1, 21, 26, 45] [2, 9, 20, 28] [16, 27, 39, 49] [34, 40, 43, 46]
  // 7) [1, 2, 9, 20, 21, 26, 28, 45] [16, 27, 34, 39, 40, 43, 46, 49]
  // 8) [1, 2, 9, 16, 20, 21, 26, 27, 34, 39, 40, 43, 45, 46, 49]

  // What are the first 2 lists to be merged? -- line 5 [21, 1] [26, 45]
  // Which two lists would be merged on the 7th merge? -- line 7 [1, 2, 9, 20, 21, 26, 28, 45] [16, 27, 34, 39, 40, 43, 46, 49]

  // 2. Understanding quick sort

  // the pivot could have been either 14 or 7 -- it could have been any number in the array

  // 3. Implementing quicksort
  let dataset = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ];

  console.log(quickSort(dataset));

  // 4. implement merge sort

  console.log(mergeSort(dataset));

  // 5. sorting a linked list using merge sort

  const LL = new LinkedList()
  LL.insertFirst(5)
  LL.insertLast(7)
  LL.insertLast(9)
  LL.insertLast(2)
  LL.insertLast(10)
  LL.insertLast(4)
  LL.insertLast(8)
  LL.insertLast(1)
  LL.insertLast(3)
  LL.insertLast(6)
  console.log(LL)

  const sortLL = (LL) => {
    let array = []
    let current = LL.head
    while (current !== null) {
      array.push(current.value)
      current = current.next
    }
    mergeSort(array)
    return array
  }

  console.log(sortLL(LL))

};

module.exports = main;
