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
}

module.exports = main;
