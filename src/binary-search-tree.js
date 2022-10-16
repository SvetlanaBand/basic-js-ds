const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = insertdata(this.rootTree, data);

    function insertdata(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertdata(node.left, data);
      } else {
        node.right = insertdata(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchdata(this.rootTree, data);

    function searchdata(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchdata(node.left, data) : searchdata(node.right, data);
    }
  }

  find(data) {
    return finddata(this.rootTree, data);

    function finddata(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? finddata(node.left, data) : finddata(node.right, data);
    }
  }

  remove(data) {
    this.rootTree = removedata(this.rootTree, data);
    
    function removedata(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removedata(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removedata(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removedata(node.right, minFromRight.data);
        
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return undefined;
    }

    let node = this.rootTree;
    while(node.left) {
      node = node.left;
    }
    return node.data;

  }

  max() {
    if (!this.rootTree) {
      return undefined;
    }

    let node = this.rootTree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree,
};