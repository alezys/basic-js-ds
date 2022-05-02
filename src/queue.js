const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = ``;
  }

  getUnderlyingList() {
    console.log(this.list);
    return this.list;
  }

  enqueue(value) {
    if (!this.list) {
      this.list = { value: value, next: null };
      console.log(`start`);
    } else {
      console.log(`add`);
      let thisNode = this.list;
      let nextNode = thisNode.next;
      while (nextNode) {
        console.log(`1`);
        thisNode = thisNode.next;
        console.log(thisNode);
        nextNode = thisNode.next;
        console.log(nextNode);
      }
      nextNode = { value: value, next: null };
      thisNode.next = nextNode;
      console.log(thisNode);
    }
    return this.list;
  }

  dequeue() {
    if (this.list) {
      let thisNode = this.list.next;
      console.log(thisNode);
      let temp = this.list.value;
      console.log(temp);
      this.list = thisNode;
      console.log(this.list);
      return temp;
    }
  }
}

module.exports = {
  Queue,
};

// const queue = new Queue();
// queue.getUnderlyingList();
// queue.enqueue(5);
// queue.getUnderlyingList();
// queue.enqueue(6);
// queue.getUnderlyingList();
// queue.enqueue(7);
// queue.getUnderlyingList();
// queue.dequeue(); ///5
// queue.getUnderlyingList();
// queue.dequeue(); ///6
// queue.getUnderlyingList();
