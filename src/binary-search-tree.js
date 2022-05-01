const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addWithin(this.rootNode, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchNode(this.rootNode, value);

    function searchNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }

      return value < node.data ? searchNode(node.left, value) : searchNode(node.right, value);
    }
  }

  find(value) {
    ////?
    return findNode(this.rootNode, value);

    function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }

      return value < node.data ? findNode(node.left, value) : findNode(node.right, value);
    }
  }

  remove(value) {
    return removeNode(this.rootNode, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minNodeRight = node.right;
      while (minNodeRight.left) {
        minNodeRight = minNodeRight.left;
      }
      node.data = minNodeRight.data;
      node.right = removeNode(node.right, minNodeRight.data);
      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

// const instance = new BinarySearchTree();
// expect(instance).to.respondTo("root");
// expect(instance).to.respondTo("add");
// expect(instance).to.respondTo("find");
// expect(instance).to.respondTo("has");
// expect(instance).to.respondTo("remove");
// expect(instance).to.respondTo("min");
// expect(instance).to.respondTo("max");
