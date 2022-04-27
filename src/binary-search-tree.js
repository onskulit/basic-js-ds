const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.binaryTree = new Node(null);
  }

  root() {
    return this.binaryTree.data !== null ? this.binaryTree : null;
  }

  add(data) {
    if (this.binaryTree.data === null) return this.binaryTree.data = data;

    const addNode = (branch, data) => {
      if (branch === null) return new Node(data);
      if (branch.data === data) return branch;
      if (branch.data > data) branch.left = addNode(branch.left, data);
      if (branch.data < data) branch.right = addNode(branch.right, data);

      return branch;
    }

    this.binaryTree = addNode(this.binaryTree, data);
  }

  has(data) {
    return !this.find(data) ? false : true;
  }

  find(data) {
    return Search(this.binaryTree, data);

    function Search(branch, data){
      if (branch === null || branch.data === null) return null;
      if (branch.data === data) return branch;
      if (branch.data > data) return Search(branch.left, data);
      if (branch.data < data) return Search(branch.right, data);

      return null;
    }
  }

  remove(data) {
    const removeNode = (branch, data) => {
      if (!branch.left & !branch.right) return null;

      if (branch.data < data) {
        branch.right = removeNode(branch.right, data);
        return branch;
      }
  
      if (branch.data > data) {
        branch.left = removeNode(branch.left, data);
        return branch;
      }

      if (!branch.left) return branch = branch.right;

      if (branch.right === null) return branch = branch.left;

      let minimumFromRight = branch.right;

      while (minimumFromRight.left) {
        minimumFromRight = minimumFromRight.left;
      }

      branch.data = minimumFromRight.data;

      branch.right = removeNode(branch.right, minimumFromRight.data);

      return branch;
    }

    this.binaryTree = removeNode(this.binaryTree, data);
  }

  min() {
    if (!this.binaryTree) return null;

    let node = this.binaryTree;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.binaryTree) return null;

    let node = this.binaryTree;
    
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};