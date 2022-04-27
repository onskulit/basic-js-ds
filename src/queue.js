const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) return this.queue = new ListNode(value);

    const addNode = (node) => {
      if(!node.next) return node.next = new ListNode(value);
      
      addNode(node.next);
    }

    addNode(this.queue);
  }

  dequeue() {
    if (!this.queue) return;

    const elementToRemove = this.queue.value;
    this.queue = this.queue.next;
    return elementToRemove;
  }
}

module.exports = {
  Queue
};
