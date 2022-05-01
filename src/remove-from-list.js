const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next;
  }
  thisNode = l;
  nextNode = thisNode.next;
  while (nextNode !== null) {
    if (nextNode.value === k) {
      thisNode.next = nextNode.next;
      if (thisNode.next === null) {
        break;
      }
    }
    thisNode = thisNode.next;
    nextNode = thisNode.next;
  }
  let dbl = { ...l };
  function search(dbl, k) {
    if (dbl.value !== k && dbl.next) {
      dbl = dbl.next;
      search(dbl, k);
    } else if (dbl.value === k && dbl.next !== null) {
      removeKFromList(l, k);
    }
  }

  search(dbl, k);
  console.log(l);
  return l;
}

module.exports = {
  removeKFromList,
};

// let obj = { next: { next: { next: { next: { next: { next: null, value: 5 }, value: 4 }, value: 3 }, value: 2 }, value: 1 }, value: 3 };
// let obj = { next: { next: { next: { next: { next: { next: { next: null, value: 5 }, value: 4 }, value: 3 }, value: 3 }, value: 2 }, value: 1 }, value: 3 };
// // // [3, 1, 2, 3, 4, 5]
// [1, 2, 3, 3, 4, 5]
// // // let a = { next: { next: { next: null, value: 3 }, value: 2 }, value: 1 };
// removeKFromList(obj, 3);
