const _Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.timeLog("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  // inserts new node before a given node containing a key
  insertBefore(item, nextItem) {
    // if list is empty, will insert as first item
    let currNode = this.head;
    if (!this.head) {
      this.insertFirst(item);
    }
    while (currNode.next.value !== nextItem) {
      currNode = currNode.next;
    }
    let findItem = this.find(nextItem);
    currNode.next = new _Node(item, findItem);
  }

  // inserts a new node after a node containing a key
  insertAfter(item, prevItem) {
    if (!this.head) {
      this.insertFirst(item);
    }
    let findItem = this.find(prevItem);
    let tempNext = findItem.next;
    findItem.next = new _Node(item, tempNext);
  }

  //inserts an item at a specific position in the linked list
  insertAt(item, position) {
    // ('item', 3)
    let currNode = this.head;
    let counter = 0;
    while (currNode.next !== null) {
      counter++;
      if (counter === position) {
        this.insertBefore(item, currNode.value);
      }
      currNode = currNode.next;
    }
  }
}

module.exports = LinkedList;
